import style from "./ButtonOutline.module.scss";
import classNames from "classnames";

type Props = {
  title: string;
  className: string;
};

export default function ButtonOutline({ title, className }: Props) {
  return (
    <button className={classNames(style["button-outline"], className)}>
      {title}
    </button>
  );
}
