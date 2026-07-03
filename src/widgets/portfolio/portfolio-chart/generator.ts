export interface DataPoint {
  date: string;
  value: number;
}

export function generateData(
  points: number,
  labelFn: (i: number) => string,
): DataPoint[] {
  let value = 1_100_000;
  return Array.from({ length: points }, (_, i) => {
    const change = (Math.random() - 0.45) * 0.02;
    value = Math.round(value * (1 + change));
    return { date: labelFn(i), value };
  });
}
