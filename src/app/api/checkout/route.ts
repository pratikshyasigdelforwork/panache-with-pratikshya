import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getAppUrl, getStripe } from "@/lib/stripe";

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().min(1).max(20),
      }),
    )
    .min(1),
});

export async function POST(request: Request) {
  const parsed = checkoutSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid checkout request." }, { status: 400 });
  }

  const requestedItems = parsed.data.items;
  const products = await prisma.product.findMany({
    where: {
      id: { in: requestedItems.map((item) => item.productId) },
      active: true,
    },
  });

  const productById = new Map(products.map((product) => [product.id, product]));
  const orderItems = [];

  for (const item of requestedItems) {
    const product = productById.get(item.productId);

    if (!product) {
      return NextResponse.json(
        { error: "A product in your cart is no longer available." },
        { status: 400 },
      );
    }

    if (product.stock < item.quantity) {
      return NextResponse.json(
        { error: `${product.name} only has ${product.stock} left in stock.` },
        { status: 400 },
      );
    }

    orderItems.push({ product, quantity: item.quantity });
  }

  const subtotalCents = orderItems.reduce(
    (total, item) => total + item.product.priceCents * item.quantity,
    0,
  );

  if (subtotalCents < 1) {
    return NextResponse.json({ error: "Cart total is invalid." }, { status: 400 });
  }

  let stripe;

  try {
    stripe = getStripe();
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Stripe is not configured." },
      { status: 503 },
    );
  }

  try {
    const order = await prisma.order.create({
      data: {
        total: subtotalCents / 100,
        subtotalCents,
        totalCents: subtotalCents,
        currency: "usd",
        status: "pending",
        items: {
          create: orderItems.map(({ product, quantity }) => ({
            productId: product.id,
            quantity,
            price: product.priceCents / 100,
            priceCents: product.priceCents,
            productName: product.name,
            productImage: product.image,
          })),
        },
      },
      include: { items: true },
    });

    const appUrl = getAppUrl();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: orderItems.map(({ product, quantity }) => ({
        quantity,
        price_data: {
          currency: product.currency,
          unit_amount: product.priceCents,
          product_data: {
            name: product.name,
            description: product.description ?? undefined,
            metadata: {
              productId: product.id,
              slug: product.slug,
            },
          },
        },
      })),
      metadata: {
        orderId: order.id,
      },
      customer_creation: "if_required",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["NP", "US", "AU", "GB", "IN"],
      },
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cart`,
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripeCheckoutSessionId: session.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to start checkout.",
      },
      { status: 400 },
    );
  }
}
