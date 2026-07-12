
import {Coin} from "../types/Coin"

import { CoinGeckoCoinResponse } from "../types/CoinGeckoCoinResponse";

export function mapCoingeckoCoinToCoin(apiCoin:CoinGeckoCoinResponse):Coin{
return {
    id: apiCoin.id,
    name: apiCoin.name,
    symbol: apiCoin.symbol,
    image: apiCoin.image,
    current_price: apiCoin.current_price,
    market_cap: apiCoin.market_cap,
    market_cap_rank: apiCoin.market_cap_rank,
    price_change_percentage_24h:
    apiCoin.price_change_percentage_24h,
}
}