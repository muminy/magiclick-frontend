import { useEffect, useState } from "react";

// ** components
import Input from "./Input";

// ** service api
import { handleConvertPrice } from "../../services/price";

export default function Converter() {
  const [from, setFrom] = useState("USD");
  const [inputValue, setInputValue] = useState(1);
  const [outputValue, setOutputValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    handleConvertPrice({ from, value: inputValue })
      .then((response) => {
        setOutputValue(response.result);
      })
      .finally(() => setLoading(false));
  }, [from, inputValue]);

  return (
    <div className="converter">
      <Input
        getCurrency={(cny) => setFrom(cny)}
        getInputValue={(value) => setInputValue(value)}
        currency={from}
        value={inputValue}
        withOptions
        id="converter"
      />
      <img src="/assets/images/converter.svg" alt="Converter Icon" />
      <Input value={loading ? "" : outputValue} />
    </div>
  );
}
