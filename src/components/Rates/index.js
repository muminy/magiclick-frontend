// ** components
import ButtonGroups from "../ButtonGroups";
import MarketRates from "./MarketRates";

// ** style
import "./style.scss";

export default function Rates() {
  return (
    <div className="markets">
      <MarketRates />
      <ButtonGroups />
    </div>
  );
}
