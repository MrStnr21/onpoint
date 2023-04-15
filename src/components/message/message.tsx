import { FC } from "react";

import stylesMessage from "./message.module.css";

import spermGroup from "../../images/message/spermGroup.png";

import { mainText } from "../utils/data";

const Message: FC = (): JSX.Element => {
  return (
    <section className={stylesMessage.container}>
      <h1 className={stylesMessage.title}>текст сообщения</h1>
      <div className={stylesMessage.infoContainer}>
        <div className={stylesMessage.backgroundText} />
        <div className={stylesMessage.info}>
          <p className={stylesMessage.text}>
            <span className={stylesMessage.boldElement}>
              Lorem ipsum dolor sit amet
            </span>
            {mainText}
          </p>
        </div>
      </div>
      <img
        className={stylesMessage.spermGroup}
        src={spermGroup}
        alt="сперматазоиды"
      />
    </section>
  );
};

export { Message };
