const MIN_MS_FROM_NOW = 1;
const TEN_YEARS_MS = 10 * 365 * 24 * 60 * 60 * 1000;

export function randomDate(): Date {
  const offset =
    MIN_MS_FROM_NOW +
    Math.floor(Math.random() * (TEN_YEARS_MS - MIN_MS_FROM_NOW + 1));
  return new Date(Date.now() + offset);
}
