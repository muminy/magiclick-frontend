import Input from "./Input";

export default function Converter() {
  return (
    <div className="converter">
      <Input defaultValue={"1.000.000"} id="converter" withOptions />
      <button>
        <img src="/assets/images/converter.svg" alt="Converter Image" />
      </button>
      <Input defaultValue={"6.789.456,99"} />
    </div>
  );
}
