const stockSymbols = [
  "AAPL",
  "GOOGL",
  "MSFT",
  "AMZN",
  "TSLA",
  "META",
  "NFLX",
  "NVDA",
  "IBM",
  "ORCL",
];

export default async function handler() {
  const randomSymbols: string[] = [];
  while (randomSymbols.length < 5) {
    const randomSymbol =
      stockSymbols[Math.floor(Math.random() * stockSymbols.length)];
    if (!randomSymbols.includes(randomSymbol)) {
      randomSymbols.push(randomSymbol);
    }
  }

  const apiKey = "08N91ZJ7D59VE8R2";
  const fetchStockData = async (symbol: string) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo`;
    const response = await fetch(url);
    console.log(response.json());
    return response.json();
  };
}
