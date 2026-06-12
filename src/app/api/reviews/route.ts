import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleApiError, ApiError } from "@/lib/api-utils";
import { authorize } from "@/lib/auth-middleware";

export async function POST(req: NextRequest) {
  try {
    const user = await authorize();
    const { productId, rating, comment } = await req.json();
    
    if (!user.id) throw new ApiError("User ID missing", 401);

    const review = await prisma.review.create({
      data: { 
        productId, 
        userId: user.id as string, 
        rating: Number(rating), 
        comment 
      }
    });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
