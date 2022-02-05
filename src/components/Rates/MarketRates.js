import { useEffect, useState } from "react";

// ** components
import MarketCard from "./Card";
import MarketSkeleton from "./Skeleton";

// ** api service
import { handleGetPrices } from "../../services/price";

// ** rate data
import db from "./db.json";

export default function MarketRates() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetPrices().then((response) => {
      setRates(response.rates);
      setLoading(false);
    });
  }, []);

  if (loading) return <MarketSkeleton />;

  return (
    <div className="market-rates">
      {loading ? (
        <MarketSkeleton />
      ) : (
        db.map((item) => (
          <MarketCard price={rates[item.id]} key={item.id} {...item} />
        ))
      )}
    </div>
  );
}
