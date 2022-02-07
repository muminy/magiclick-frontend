import { calculatePrice } from "../../helpers/utils";

export default function MarketCard(props) {
  const price = calculatePrice(props.price);

  return (
    <div className="market-card xl:col-span-6 col-span-12">
      <div className="flag-area">
        <img alt={`flag icon`} src={`assets/images/flags/${props.flag}`} />
      </div>

      <div className="market-name">
        <div className="market-currency">{props.id}</div>
        <div className="name">{props.name}</div>
      </div>

      <div className="market-data">
        <div className="data-title">Alış</div>
        <div className="data-value">{price}</div>
      </div>
      <div className="market-data">
        <div className="data-title">Satış</div>
        <div className="data-value">{price}</div>
      </div>
    </div>
  );
}
