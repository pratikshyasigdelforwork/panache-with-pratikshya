import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  
  // Mocking coupon check since model is not in schema
  if (code === "PANACHE10") {
      return NextResponse.json({ code: "PANACHE10", discount: 10, isActive: true });
  }
  
  return NextResponse.json({ error: "Invalid coupon" }, { status: 400 });
}
