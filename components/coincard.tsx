import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CoinData } from "@/types/CoinData";

function CoinCard({ coin }: { coin: CoinData }) {
  const getPercentColor = (num: number) =>
    num > 0 ? "text-green-600" : num < 0 ? "text-red-600" : "text-muted-foreground";

  const getSign = (num: number) =>
    num > 0 ? "+" : num < 0 ? "-" : "";

  const arrowColor = getPercentColor(coin.price_change_24h);

  return (
    <Card className="hover:shadow-lg transition-all border-border/40 backdrop-blur-sm bg-background/70 rounded-xl">
      <CardHeader className="flex flex-row items-center space-x-4 pb-3">
        <Image
          src={coin.image}
          alt={coin.name}
          width={44}
          height={44}
          className="rounded-full bg-secondary/30 p-1.5"
        />
        <div className="flex flex-col">
          <CardTitle className="text-base font-bold tracking-tight flex items-center gap-2">
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
        <div className="flex items-end gap-3">
          <p className="text-3xl font-bold tracking-tight">
            ${coin.price.toLocaleString()}
          </p>

          {/* Arrow Indicator */}
          <span className={`text-sm font-semibold flex items-center ${arrowColor}`}>
            (
            {getSign(coin.price_change_24h)}
            {
              <span className="ml-0.5">{Math.abs(coin.price_change_24h)}%</span>
            }
            )
          </span>
        </div>

        {/* Change Indicators Grid */}
        <div className="grid grid-cols-3 gap-1 py-2 border-y border-border/40 bg-muted/20 rounded">
          {[
            { label: "1h", value: coin.price_change_1h },
            { label: "24h", value: coin.price_change_24h },
            { label: "7d", value: coin.price_change_7d },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center flex flex-col items-center py-1"
            >
              <p className="text-[10px] text-muted-foreground uppercase">
                {item.label}
              </p>
              <p className={`text-xs font-semibold ${getPercentColor(item.value)}`}>
                {Number(item.value).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>

        {/* Market Data */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Market Cap</span>
            <span className="font-semibold">
              ${coin.market_cap.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">24h Volume</span>
            <span className="font-semibold">
              ${coin.volume_24h.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CoinCard;