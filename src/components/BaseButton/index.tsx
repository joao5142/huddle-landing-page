import style from "./BaseButton.module.scss";
import classNames from "classnames";

type Props = {
  title: string;
  rounded: boolean;
  large: boolean;
};

export default function BaseButton({ title, rounded, large }: Props) {
  return (
    <button
      className={classNames(
        style.button,
        {
          [style["button--rounded"]]: rounded,
        },
        {
          [style["button--large"]]: large,
        }
      )}
    >
      {title}
    </button>
  );
}
