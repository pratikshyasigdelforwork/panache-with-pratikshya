import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleApiError } from "@/lib/api-utils";
import { authorize } from "@/lib/auth-middleware";

export async function POST(req: NextRequest) {
  try {
    const user = await authorize();
    const { productId, rating, comment } = await req.json();
    const review = await prisma.review.create({
      data: { productId, userId: user.id, rating, comment }
    });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
