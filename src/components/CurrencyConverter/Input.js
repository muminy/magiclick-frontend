import db from "../Rates/db.json";

export default function Input({
  withOptions,
  currency,
  getCurrency,
  value,
  getInputValue,
  ...props
}) {
  return (
    <label htmlFor={props.id} className="input-area">
      <input
        readOnly={!withOptions}
        value={value}
        onChange={(event) => getInputValue(event.target.value)}
        className="font-medium"
      />

      {withOptions ? (
        <label htmlFor="currency" className="select-area">
          <select
            onChange={(event) => getCurrency(event.target.value)}
            defaultValue={currency}
            id="currency"
          >
            {db.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>

          <img src="/assets/images/icons/bottom-arrow.svg" alt="bottom arrow" />
        </label>
      ) : (
        <div className="currency-name">TL</div>
      )}
    </label>
  );
}
