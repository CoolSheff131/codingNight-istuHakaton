export function toString(val: unknown): string {
  if (val === undefined || val === null) return '';
  if (Array.isArray(val)) return JSON.stringify(val);
  return String(val);
}
