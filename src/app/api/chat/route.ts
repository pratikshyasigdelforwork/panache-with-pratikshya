import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    return Response.json({
      reply: response.text,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
