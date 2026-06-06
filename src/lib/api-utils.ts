import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(public message: string, public statusCode: number = 400) {
    super(message);
  }
}

export const validate = (schema: { safeParse: (data: unknown) => { success: boolean, data?: unknown, error?: { errors: { path: (string | number)[], message: string }[] } } }, data: unknown) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ApiError(result.error?.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ') || 'Validation error', 422);
  }
  return result.data;
};

export const handleApiError = (error: unknown) => {
  console.error('[API Error]:', error);
  if (error instanceof ApiError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  }
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
};
