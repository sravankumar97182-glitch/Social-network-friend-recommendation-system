export function normalizeScore(score: number, max: number): number {
  if (max === 0) return 0;
  return Math.min(100, Math.round((score / max) * 100));
}

export function calculateJaccardSimilarity(setA: string[], setB: string[]): number {
  const intersection = setA.filter((item) => setB.includes(item));
  const union = [...new Set([...setA, ...setB])];
  return union.length === 0 ? 0 : intersection.length / union.length;
}

export function calculateInterestSimilarity(interests1: string[], interests2: string[]): number {
  if (interests1.length === 0 && interests2.length === 0) return 1;
  if (interests1.length === 0 || interests2.length === 0) return 0;
  return calculateJaccardSimilarity(interests1, interests2);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
