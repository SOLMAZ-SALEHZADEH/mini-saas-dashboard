import { getCoinById } from "@/features/market/api/get-coin-by-id";
import { formatCurrency } from "@/shared/utils/format-currency";
import { formatPercentage } from "@/shared/utils/format-percentage";
import Image from "next/image";

interface CoinDetailProps {
    params: Promise<{
        coinId: string;
      }>;
}

export default async function CoinDetail({params}:CoinDetailProps){
    const { coinId } = await params;
    const coin = await getCoinById(coinId)
    return (
        <main className="max-w-4xl mx-auto p-8">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={coin.image}
              alt={coin.name}
              width={80}
              height={80}
            />
      
            <div>
              <h1 className="text-4xl font-bold">{coin.name}</h1>
              <p className="text-gray-500 uppercase">
                {coin.symbol}
              </p>
            </div>
          </div>
      
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-semibold">
                ${formatCurrency(coin.currentPrice)}
              </p>
            </div>
      
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Market Cap</p>
              <p className="text-2xl font-semibold">
                ${formatCurrency(coin.marketCap)}
              </p>
            </div>
      
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Rank</p>
              <p className="text-2xl font-semibold">
                #{coin.marketCapRank}
              </p>
            </div>
      
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">24h Change</p>
              <p
                className={
                  coin.priceChangePercentage24h > 0
                    ? "text-2xl font-semibold text-green-500"
                    : "text-2xl font-semibold text-red-500"
                }
              >
                {formatPercentage(
                  coin.priceChangePercentage24h
                )}
              </p>
            </div>
          </div>
      
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              About
            </h2>
      
            <p className="leading-7 text-gray-700">
              {coin.description.slice(0, 1000)}
            </p>
          </section>
        </main>
      );
}