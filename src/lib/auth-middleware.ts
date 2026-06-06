import { auth } from "@/lib/auth";
import { ApiError } from "./api-utils";
import { Role } from "@prisma/client";

export const authorize = async (requiredRole?: Role) => {
  const session = await auth();
  
  if (!session?.user) {
    throw new ApiError("Unauthorized", 401);
  }

  if (requiredRole && session.user.role !== requiredRole) {
    throw new ApiError("Forbidden", 403);
  }

  return session.user;
};
