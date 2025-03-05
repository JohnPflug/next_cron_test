import { Novu } from "@novu/api";

const novu = new Novu({
    secretKey: process.env.NEXT_PUBLIC_NOVU_KEY,
});

export default async function sendEmail() {

    const email = await novu.trigger({
        workflowId: "cron-test",
        payload: {
            message: "This is a test from me!",
        },
        to: {
            subscriberId: process.env.NEXT_PUBLIC_SUBSCRIBERID as string
        },
    });
}