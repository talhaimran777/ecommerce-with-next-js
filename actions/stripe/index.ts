const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);

export const createPaymentIntent = async ({ amount, metadata }: { amount: number, metadata: object }) => {
    try {
        await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            metadata
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
