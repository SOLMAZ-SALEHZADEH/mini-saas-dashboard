export default interface CoinDetailsResponse {
    id: string;
    name: string;
    symbol: string;
  
    image: {
      large: string;
    };
  
    market_cap_rank: number;
  
    market_data: {
      current_price: {
        usd: number;
      };
  
      market_cap: {
        usd: number;
      };
  
      price_change_percentage_24h: number;
    };
  
    description: {
      en: string;
    };
  }