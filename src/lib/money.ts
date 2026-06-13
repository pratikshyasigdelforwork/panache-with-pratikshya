export function formatMoney(cents: number, currency = "usd") {
  if (!Number.isFinite(cents) || cents < 0) cents = 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export function toCents(price: number) {
  return Math.round(price * 100);
}
