export function calculatePrice(price: number, percent: number) {
  return price * (1 + percent / 100);
}