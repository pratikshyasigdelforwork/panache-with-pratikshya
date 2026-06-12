import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are the PRATIKSHYA NEPAL Heritage Assistant, an expert in luxury Nepalese fashion, heritage craftsmanship, and high-end customer service.
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

Keep responses concise (under 3 sentences) unless more detail is requested.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      systemInstruction: SYSTEM_PROMPT 
    });

    const result = await model.generateContent(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
