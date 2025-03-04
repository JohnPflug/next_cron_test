"use server";
import { Novu } from "@novu/api";

// Novu:
const novu = new Novu({
    secretKey: process.env.NEXT_PUBLIC_NOVU_KEY,
});

export async function sendMessage() {

    const result = await novu.trigger({
        workflowId: "subscription",
        payload: {
            message: "Hello",
        },
        to: {
            subscriberId: process.env.NEXT_PUBLIC_SUBSCRIBERID
        },
    });
}

sendMessage();