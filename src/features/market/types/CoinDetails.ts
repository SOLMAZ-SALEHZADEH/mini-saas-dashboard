export default interface CoinDetails {
    id: string;
    name: string;
    symbol: string;
    image: string;
    currentPrice: number;
    marketCap: number;
    marketCapRank: number;
    priceChangePercentage24h: number;
    description: string;
}