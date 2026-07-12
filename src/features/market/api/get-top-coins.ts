import { env } from "@/shared/config/env";

import { CoinGeckoCoinResponse } from "../types/CoinGeckoCoinResponse";
import { mapCoingeckoCoinToCoin } from "../mappers/map-coingecko-coin-to-coin";
import {Coin} from "../types/Coin"

const TOP_COINS_LIMIT = 10;
export async function getTopCoins(): Promise<Coin[]>{
   const response = await fetch(`${env.COINGECKO_API_BASE_URL}/coins/markets?vs_currency=usd&per_page=${TOP_COINS_LIMIT}`,{
    next:{
        revalidate:60
    }
   })
   if(!response.ok){
    throw new Error("Failed to fetch top coins")
   }
   const data:CoinGeckoCoinResponse[]= await response.json()

   return data.map(mapCoingeckoCoinToCoin)
}