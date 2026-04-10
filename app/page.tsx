import CoinCard from "@/components/coincard";
import { CoinData } from "@/types/CoinData";

export default async function Home() {
  const res = await fetch("http://localhost:3001/crypto", { next: { revalidate: 60 } });
  const coinData: CoinData[] = await res.json();

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Header Section */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">CryptoDash</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Market Overview</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">Price Updates</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        {coinData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coinData.map((coin) => (
              <CoinCard coin={coin} key={coin.symbol} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-500 font-medium">No market data available</p>
          </div>
        )}
      </div>
    </main>
  );
}