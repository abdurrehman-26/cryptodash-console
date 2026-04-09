import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CoinData } from "@/types/CoinData";

function CoinCard({ coin }: { coin: CoinData }) {
  const priceChangeColor =
    coin.price_change_24h >= 0 ? "text-green-600" : "text-red-600";

  const marketCapChangeColor =
    coin.market_cap_change_percentage_24h >= 0
      ? "text-green-500"
      : "text-red-500";

  return (
    <Card className="hover:shadow-lg transition p-4">
      <CardHeader className="flex items-center space-x-4">
        <Image
          src={coin.image}
          alt={coin.name}
          width={48}
          height={48}
          className="rounded-full h-auto"
        />
        <div>
          <CardTitle className="text-lg">
            {coin.name}{" "}
            <span className="text-muted-foreground text-sm">
              ({coin.symbol.toUpperCase()})
            </span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">Rank #{coin.market_cap_rank}</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-2xl font-bold">${coin.current_price.toLocaleString()}</p>

        <p className={`font-medium ${priceChangeColor}`}>
          {coin.price_change_percentage_24h.toFixed(2)} % (24h)
        </p>

        <p className={`text-sm ${marketCapChangeColor}`}>
          Market Cap Change: {coin.market_cap_change_percentage_24h.toFixed(2)} %
        </p>

        <p className="text-sm text-muted-foreground">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>

        <p className="text-sm text-muted-foreground">
          24h High / Low: ${coin.high_24h.toLocaleString()} / ${coin.low_24h.toLocaleString()}
        </p>

        <p className="text-xs text-muted-foreground">
          Last Updated: {new Date(coin.last_updated).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}

export default CoinCard;