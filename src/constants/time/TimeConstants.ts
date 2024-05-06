export const SecondsNumber = generateNumbers();
export const Time = ["seconds", "minutes", "hours", "days", "weeks"];

function generateNumbers(): number[] {
  const numbers: number[] = [];
  for (let i = 1; i <= 59; i++) {
    numbers.push(i);
  }
  return numbers;
}
