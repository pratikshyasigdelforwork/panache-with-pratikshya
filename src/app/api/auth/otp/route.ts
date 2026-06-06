import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: Request) {
  const { phone, otp } = await req.json();

  try {
    // Logic to send OTP via WhatsApp (requires Twilio WhatsApp Sandbox or verified number)
    await client.messages.create({
      body: `Your Panache verification code is: ${otp}`,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${phone}`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Twilio Error:', error);
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
  }
}
