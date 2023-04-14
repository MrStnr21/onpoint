import { FC } from "react";

import stylesDecoration from "./decoration.module.css";

import bottle from "../../../images/advice/bottle.png";

import blueBubble from "../../../images/advice/7.png";
import blueBubbleLit from "../../../images/advice/3.png";
import blueBubbleMid from "../../../images/advice/5.png";
import blueBubbleMid2 from "../../../images/advice/4.png";
import blueBubbleBig from "../../../images/advice/6.png";

import pinkBubble from "../../../images/advice/1.png";
import pinkBubbleMid from "../../../images/advice/8.png";
import pinkBubbleBig from "../../../images/advice/2.png";

const Decoration: FC = () => {
  return (
    <section className={stylesDecoration.container}>
      <img className={stylesDecoration.bottle} src={bottle} alt="бутылка" />
      <img
        className={stylesDecoration.pinkBubbleBig}
        src={pinkBubbleBig}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.blueBubbleBig}
        src={blueBubbleBig}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.pinkBubbleMid}
        src={pinkBubbleMid}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.blueBubble}
        src={blueBubble}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.blueBubbleMid}
        src={blueBubbleMid}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.pinkBubble}
        src={pinkBubble}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.blueBubbleLit}
        src={blueBubbleLit}
        alt="пузырь"
      />
      <img
        className={stylesDecoration.blueBubbleMid2}
        src={blueBubbleMid2}
        alt="пузырь"
      />
    </section>
  );
};

export { Decoration };
