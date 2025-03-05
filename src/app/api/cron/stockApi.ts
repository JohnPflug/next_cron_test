import axios from 'axios';

const apiCall = axios.create({
    baseURL: 'https://api.twelvedata.com/'
});

export default async function getStockData(stockSymbolArray: string[]) {
    const symbols = stockSymbolArray.join(); // convert symbolArray to symbols string.
    const config = {
        method: 'get',
        url: '/quote',
        params: {
            symbol: symbols,
            apikey: process.env.NEXT_PUBLIC_TWELVEDATA_APIKEY as string
        }
    };

    const res = await apiCall(config);
    const data = res.data;
    return data;
}