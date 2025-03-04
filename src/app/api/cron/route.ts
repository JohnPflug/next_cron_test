// "use server";
import { Novu } from "@novu/api";
// import axios from 'axios';

const novu = new Novu({
    secretKey: process.env.NEXT_PUBLIC_NOVU_KEY,
});

export async function GET() {
    const res = await fetch(`https://api.twelvedata.com/quote?symbol=AAPL&apikey=${process.env.NEXT_PUBLIC_APIKEY}`);
    const data = await res.json()
    const result = await novu.trigger({
        workflowId: "subscription",
        payload: {
            message: data,
        },
        to: {
            subscriberId: process.env.NEXT_PUBLIC_SUBSCRIBERID as string,
        },
    });
    console.log("Notification sent:", result);
    return Response.json({ data })
}






// export default async function GET(stockSymbol: string) {
//     const config = {
//         method: 'get',
//         url: '/quote',
//         params: {
//             symbol: stockSymbol,
//             apikey: process.env.NEXT_PUBLIC_APIKEY as string
//         }
//     };
//     const res = await stockApi(config);
//     const data = res.data
//     return Response.json({ data })
// }

// GET('AAPL');


