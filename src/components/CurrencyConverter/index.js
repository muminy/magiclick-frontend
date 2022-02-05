// ** components
import Converter from "./Converter";

// ** style
import "./style.scss";

export default function CurrencyConverter() {
  return (
    <div className="xl:col-span-3 col-span-12">
      <div className="converter-area">
        <h1>Döviz Çevir</h1>

        <Converter />
      </div>
    </div>
  );
}
