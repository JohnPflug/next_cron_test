// export default async function getWatchlist() {
//     const stockSymbolArray: string[] = []; // initialise an empty stock symbol array.
//     const response = await fetch("http://localhost:5000/Watchlist"); // fetch the data from the Watchlist in DB.
//     const parsedWatchlist = await response.json(); // parse the Watchlist data.
//     parsedWatchlist.forEach((user) => {
//         if (!stockSymbolArray.includes(user.stockSymbol)) {
//             stockSymbolArray.push(user.stockSymbol);
//         }
//     });
//     return stockSymbolArray;
// }