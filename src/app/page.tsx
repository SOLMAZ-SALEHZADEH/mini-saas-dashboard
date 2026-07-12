import { getTopCoins } from "@/features/market/api/get-top-coins";
import MarketTable from "@/features/market/components/market-table";

export default async function Home() {
  const coins = await getTopCoins();

  return (
      <MarketTable coins={coins}/>
  );
}
