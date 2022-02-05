import ButtonGroups from "../ButtonGroups";
import MarketCard from "./Card";
import db from "./db.json";
import "./style.scss";

export default function Markets() {
  return (
    <div className="markets">
      <div className="grid grid-cols-12 col-span-12 xl:gap-x-20 lg:gap-x-20 gap-x-0">
        {db.map((item) => (
          <MarketCard key={item.id} {...item} />
        ))}
      </div>
      <ButtonGroups />
    </div>
  );
}
