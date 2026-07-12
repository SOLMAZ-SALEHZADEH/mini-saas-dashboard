import CoinDetails from "../types/CoinDetails";
import CoinDetailsResponse from "../types/CoinDetailsResponse";

export function mapCoingeckoCoinDetailToCoinDetail(
    coin: CoinDetailsResponse
  ): CoinDetails {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
  
      image: coin.image.large,
  
      currentPrice: coin.market_data.current_price.usd,
  
      marketCap: coin.market_data.market_cap.usd,
  
      marketCapRank: coin.market_cap_rank,
  
      priceChangePercentage24h:
        coin.market_data.price_change_percentage_24h,
  
      description: coin.description.en,
    };
  }