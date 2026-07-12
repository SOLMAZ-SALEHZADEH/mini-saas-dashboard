import { env } from "@/shared/config/env"
import CoinDetails from "../types/CoinDetails"
import CoinDetailsResponse from "../types/CoinDetailsResponse"
import { mapCoingeckoCoinDetailToCoinDetail } from "../mappers/map-coingecko-coinDetail-to-coinDetail"


export async function getCoinById(coinId: string):Promise<CoinDetails>{
   const response = await fetch (`${env.COINGECKO_API_BASE_URL}/coins/${coinId}`,{
    next:{
        revalidate:60
    }
   })
   if(!response.ok){
    throw new Error("Failed to fetch top coins")
   }
   const data:CoinDetailsResponse = await response.json()
   return mapCoingeckoCoinDetailToCoinDetail(data)
}