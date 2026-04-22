const MIN_CENTS = 50;
const MAX_CENTS = 10050; 

export function randomAmount(): number {
  const cents =
    Math.floor(Math.random() * (MAX_CENTS - MIN_CENTS + 1)) + MIN_CENTS;
  return cents / 100;
}
