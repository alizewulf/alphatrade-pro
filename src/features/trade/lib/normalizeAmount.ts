export function normalizeAmount(value: string) {
  let sanitized = value.replace(/[^0-9.]/g, "");

  const parts = sanitized.split(".");

  if (parts.length > 2) {
    sanitized = `${parts[0]}.${parts.slice(1).join("")}`;
  }

  if (parts.length === 2) {
    sanitized = `${parts[0] || "0"}.${parts[1].slice(0, 2)}`;
  }

  return sanitized;
}