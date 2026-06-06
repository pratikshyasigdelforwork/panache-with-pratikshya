"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");

  const handleWhatsAppLogin = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    await fetch("/api/auth/otp", {
      method: "POST",
      body: JSON.stringify({ phone, otp }),
    });
    alert("OTP sent to your WhatsApp!");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-4xl font-bold uppercase tracking-tighter">Login to Panache</h1>
      
      <div className="flex w-full max-w-sm flex-col gap-4">
        <button 
          onClick={() => signIn("google")}
          className="h-12 w-full border border-neutral-300 font-bold uppercase hover:bg-neutral-50"
        >
          Sign in with Google
        </button>
        <button 
          onClick={() => signIn("apple")}
          className="h-12 w-full border border-neutral-300 font-bold uppercase hover:bg-neutral-50"
        >
          Sign in with Apple
        </button>
        
        <div className="my-4 border-t border-neutral-200" />
        
        <input 
          type="text" 
          placeholder="WhatsApp Phone Number (e.g., +1234567890)"
          className="h-12 w-full border border-neutral-300 px-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button 
          onClick={handleWhatsAppLogin}
          className="h-12 w-full bg-neutral-950 font-bold uppercase text-white hover:bg-neutral-800"
        >
          Send WhatsApp OTP
        </button>
      </div>
    </div>
  );
}
