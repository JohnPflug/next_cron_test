// "use server";

import sendEmail from "./novu"; // imports sendEmail from Novu.
import getStockData from "./stockApi"; // imports getStockData function.
import getWatchlist from "./getWatchlist";

// This symbol array will be what we pass to the TwelveDataApi:
// const symbolArray: string[] = ['AAPL', 'EUR/USD'];

export async function GET() { // need to call this function GET.

    // Fetch symbols from Watchlist table:
    const stockSymbolArray = await getWatchlist();

    try {
        // Fetch stock data:
        const data = await getStockData(stockSymbolArray); // symbolArray is an array of stock symbols.

        // Send an email notification:
        const message = await sendEmail();

        // Return stock data as a response:
        return Response.json(data);

    } catch (error: any) {
        // console.error("Error in GET request:", error.message);
        return Response.json(error.message);
    }
}


// Previous set up:
// export async function GET() {
//     const res = await fetch(`https://api.twelvedata.com/quote?symbol=AAPL&apikey=${process.env.NEXT_PUBLIC_APIKEY}`);
//     const data = await res.json()
//     const message = await sendEmail();
//     return Response.json(data)
// }