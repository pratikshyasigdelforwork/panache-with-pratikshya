import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/lib/api-utils";
import { authorize } from "@/lib/auth-middleware";

export async function GET() {
  try {
    const user = await authorize();
    const orders = await prisma.order.findMany({
      where: { userId: user.id },
      include: { items: true }
    });
    return NextResponse.json(orders);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await authorize();
    const body = await req.json();
    const order = await prisma.order.create({
      data: { ...body, userId: user.id }
    });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
