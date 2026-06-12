import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the PRATIKSHYA NEPAL Heritage Assistant, an expert in luxury Nepalese fashion, heritage craftsmanship, and high-end customer service.
The brand PRATIKSHYA NEPAL (established in 1952) focuses on authentic Nepalese heritage, specifically:
- Pashmina Silks
- Dhaka Weaves
- Muga Gold
- Mithila Art

Your tone should be:
- Respectful and "Namaste" greeted.
- Sophisticated yet warm.
- Expert in Nepalese textiles and heritage.

If users ask about:
- Shipping: We ship globally from Kathmandu.
- Orders: Ask them to provide their order ID.
- Materials: Explain the luxury and artisanal nature of our 100% authentic Nepalese materials.

Keep responses concise (under 3 sentences) unless more detail is requested.`;

const FALLBACKS: { keywords: string[]; response: string }[] = [
  {
    keywords: ["pashmina", "cashmere"],
    response:
      "Namaste. Our Pashmina Silks are handwoven from the finest Himalayan cashmere, each taking over 72 hours to complete by our master artisans in Kathmandu.",
  },
  {
    keywords: ["dhaka", "weave"],
    response:
      "Namaste. Dhaka weaving is a 500-year-old Nepalese tradition. Our Dhaka Weaves feature intricate geometric patterns hand-loomed by skilled artisans.",
  },
  {
    keywords: ["muga", "gold"],
    response:
      "Namaste. Muga Gold is our most treasured fabric — naturally golden, hand-spun from rare Assam silk that grows more lustrous with age.",
  },
  {
    keywords: ["mithila", "art"],
    response:
      "Namaste. Mithila Art pieces feature hand-painted motifs inspired by ancient Nepalese mythology, each brushstroke applied by hereditary artists.",
  },
  {
    keywords: ["shipping", "delivery", "ship"],
    response:
      "We offer complimentary global shipping on orders over $200. Standard delivery takes 5–8 business days worldwide from our Kathmandu atelier.",
  },
  {
    keywords: ["return", "refund", "exchange"],
    response:
      "We accept returns within 14 days of delivery. Items must be unworn with tags attached. Please contact our concierge for a prepaid return label.",
  },
  {
    keywords: ["size", "fit", "sizing"],
    response:
      "Our garments are true to size with a tailored fit. Please consult our Size Guide for detailed measurements. We recommend taking your usual size.",
  },
  {
    keywords: ["order", "track"],
    response:
      "To check your order status, please provide your order ID and I will be happy to assist you with tracking details.",
  },
  {
    keywords: ["care", "wash", "clean", "maintain"],
    response:
      "We recommend dry cleaning only for all PRATIKSHYA NEPAL garments. Store in a cool, dry place away from direct sunlight to preserve the fabric integrity.",
  },
  {
    keywords: ["hello", "hi", "namaste", "hey"],
    response:
      "Namaste! Welcome to PRATIKSHYA NEPAL. I am your heritage assistant. How may I help you discover our luxury Nepalese collections today?",
  },
];

function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase();
  for (const fb of FALLBACKS) {
    if (fb.keywords.some((kw) => lower.includes(kw))) {
      return fb.response;
    }
  }
  return "Namaste. Thank you for your interest in PRATIKSHYA NEPAL. Please feel free to ask about our collections, shipping, or any other inquiries, and our heritage assistant will be delighted to help.";
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMsg = messages[messages.length - 1]?.content || "";

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": "PRATIKSHYA NEPAL Heritage Assistant",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-70b-instruct:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: lastUserMsg },
          ],
          max_tokens: 300,
        }),
      }
    );

    if (!response.ok) {
      const fallback = getFallbackResponse(lastUserMsg);
      return NextResponse.json({ content: fallback, fallback: true });
    }

    const data = await response.json();
    const content =
      data.choices?.[0]?.message?.content ||
      getFallbackResponse(lastUserMsg);

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat Error:", error);
    try {
      const { messages } = await req.clone().json();
      const lastMsg = messages[messages.length - 1]?.content || "";
      return NextResponse.json({
        content: getFallbackResponse(lastMsg),
        fallback: true,
      });
    } catch {
      return NextResponse.json(
        { content: "Namaste. How may I assist you with PRATIKSHYA NEPAL today?" },
      );
    }
  }
}
