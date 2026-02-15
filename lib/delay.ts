export async function simulateDelay(ms: number = 15000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
