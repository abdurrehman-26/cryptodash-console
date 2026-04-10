import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CoinData } from "@/types/CoinData";

function CoinCard({ coin }: { coin: CoinData }) {
  // Helper to colorize percentages
  const getPercentColor = (num: number) =>
    num > 0 ? "text-green-600" : num < 0 ? "text-red-600" : "text-muted-foreground";

  return (
    <Card className="hover:shadow-md transition-all border-border/50">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Image
          src={coin.image}
          alt={coin.name}
          width={40}
          height={40}
          className="rounded-full bg-secondary/20 p-1"
        />
        <div className="flex flex-col">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            {coin.name}
            <span className="text-[10px] bg-secondary px-1.5 py-0.5 rounded text-secondary-foreground uppercase">
              {coin.symbol}
            </span>
          </CardTitle>
          <p className="text-xs text-muted-foreground">Rank #{coin.rank}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price Display */}
        <div>
          <p className="text-2xl font-bold tracking-tight">
            ${coin.price.toLocaleString()}
          </p>
        </div>

        {/* Change Indicators Grid */}
        <div className="grid grid-cols-3 gap-1 py-2 border-y border-border/40">
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase">1h</p>
            <p className={`text-xs font-semibold ${getPercentColor(coin.price_change_1h)}`}>
              {coin.price_change_1h}%
            </p>
          </div>
          <div className="text-center border-x border-border/40">
            <p className="text-[10px] text-muted-foreground uppercase">24h</p>
            <p className={`text-xs font-semibold ${getPercentColor(coin.price_change_24h)}`}>
              {coin.price_change_24h}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground uppercase">7d</p>
            <p className={`text-xs font-semibold ${getPercentColor(coin.price_change_7d)}`}>
              {coin.price_change_7d}%
            </p>
          </div>
        </div>

        {/* Market Data */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Market Cap</span>
            <span className="font-medium">${(coin.market_cap).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">24h Volume</span>
            <span className="font-medium">${(coin.volume_24h).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CoinCard;