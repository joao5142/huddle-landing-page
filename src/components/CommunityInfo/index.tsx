import Image from "next/image";
import style from "./CommunityInfo.module.scss";
import classNames from "classnames";

type Props = {
  title: string;
  iconUrl: string;
  text: string;
};

export const CommunityInfo = ({ title, iconUrl, text }: Props) => {
  return (
    <div>
      <Image
        src={iconUrl}
        alt="Community Info"
        width={50}
        height={50}
        className={style.image}
      />
      <h2 className={style.title}>{title}</h2>
      <p className={classNames(style.text, "text-center")}>{text}</p>
    </div>
  );
};
