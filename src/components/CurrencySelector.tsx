"use client";

import { useState } from "react";

export default function CurrencySelector() {
  const [currency, setCurrency] =
    useState("USD");

  return (
    <select
      value={currency}
      onChange={(e) =>
        setCurrency(e.target.value)
      }
      className="border rounded px-3 py-2"
    >
      <option>USD</option>
      <option>NPR</option>
      <option>EUR</option>
      <option>GBP</option>
      <option>INR</option>
    </select>
  );
}
