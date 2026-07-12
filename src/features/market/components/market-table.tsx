
import { formatCurrency } from "@/shared/utils/format-currency";
import {Coin} from "../types/Coin"
import Image from "next/image";
import { formatPercentage } from "@/shared/utils/format-percentage";
interface MarketTableProps {
    coins :Coin[]
}

export default function MarketTable({coins} : MarketTableProps){
    return(
        <table className="w-full">
  <thead className="border-b">
    <tr className="border-b">
      <th className="p-4 text-left">Rank</th>
      <th className="p-4 text-left">Coin</th>
      <th className="p-4 text-left">Symbol</th>
      <th className="p-4 text-left">Price</th>
      <th className="p-4 text-left">24h Change</th>
      <th className="p-4 text-left">Market Cap</th>
    </tr>
  </thead>
  <tbody>
      {coins.map((coin)=>
        (
            <tr className="border-b" key={coin.id}>
            <td className="p-4">
                {coin.market_cap_rank}
            </td>
            <td className="p-4">
            <div className="flex items-center gap-2">
            <Image
                src={coin.image}
                alt={coin.name}
                width={24}
                height={24}
            />
              {coin.name}
              </div>
            </td>
            <td className="p-4">{coin.symbol.toUpperCase()}</td>
            <td className="p-4">
            ${formatCurrency(coin.current_price)}
            </td>
            <td 
            className={
                coin.price_change_percentage_24h >0 ?"p-4 text-green-400":
                "p-4 text-red-500"}>
                {formatPercentage(coin.price_change_percentage_24h)}
            </td>
            <td className="p-4">
            ${formatCurrency(coin.market_cap)}
            </td>
           </tr>
        )
      )}
</tbody>
      </table>
    )

}