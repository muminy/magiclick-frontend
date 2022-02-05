import cn from "classnames";

export default function Button({ children, isFilled, icon }) {
  return (
    <button
      className={cn("actin-button", {
        "filled-button": isFilled,
        "responsive-button": icon,
      })}
    >
      {children}
      {icon && icon}
    </button>
  );
}
