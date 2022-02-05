export default function Input({ withOptions, ...props }) {
  return (
    <label htmlFor={props.id} className="input-area">
      <input {...props} className="font-medium" />

      {withOptions ? (
        <label htmlFor="currency" className="select-area">
          <select id="currency">
            <option>USD</option>
          </select>

          <img src="/assets/images/icons/bottom-arrow.svg" alt="bottom arrow" />
        </label>
      ) : (
        <div className="currency-name">TL</div>
      )}
    </label>
  );
}
