import Button from "../Button";
import RightArrow from "../icons/right-arrow.icon";
import cn from "classnames";
import "./style.scss";

export default function ButtonGroups({ responsive }) {
  return (
    <div
      className={cn("actions-buttons", {
        "xl:hidden grid !gap-y-2": responsive,
        "xl:grid hidden": !responsive,
      })}
    >
      <Button isFilled>Detaylı Bilgi</Button>
      <Button {...(responsive && { icon: <RightArrow /> })}>
        Tüm Piyasalar
      </Button>
    </div>
  );
}
