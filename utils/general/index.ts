export const amountInCents = (amount: string): number => {
    return Math.ceil(parseFloat(amount) * 100);
}
