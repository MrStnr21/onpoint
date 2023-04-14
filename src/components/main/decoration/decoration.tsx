import { FC } from "react";

import stylesDecoration from "./decoration.module.css";

import pinkSpermBlur from "../../../images/main/pink_sperm.png";
import pinkSperm from "../../../images/main/pink_sperm_1.png";
import bakti1 from "../../../images/main/bakti_1.png";
import layer4 from "../../../images/main/Layer 4.png";
import layer4v1 from "../../../images/main/Layer 4 copy.png";
import layer4v2 from "../../../images/main/Layer 4 copy 2.png";
import layer5 from "../../../images/main/Layer 5.png";
import layer7 from "../../../images/main/Layer 7.png";
import layer8 from "../../../images/main/Layer 8.png";

const Decoration: FC = () => {
  return (
    <section className={stylesDecoration.container}>
      <img
        className={stylesDecoration.pinkSpermBlur}
        src={pinkSpermBlur}
        alt="сперматазоид"
      />
      <img
        className={stylesDecoration.pinkSperm}
        src={pinkSperm}
        alt="сперматазоид"
      />
      <img className={stylesDecoration.layer7} src={layer7} alt="палочка" />
      <img className={stylesDecoration.bakti1} src={bakti1} alt="кружок" />
      <img className={stylesDecoration.layer5} src={layer5} alt="кружок" />
      <img className={stylesDecoration.layer8} src={layer8} alt="кружок" />
      <img className={stylesDecoration.layer4} src={layer4} alt="кружок" />
      <img className={stylesDecoration.layer4v2} src={layer4v2} alt="кружок" />
      <img className={stylesDecoration.layer4v1} src={layer4v1} alt="кружок" />
    </section>
  );
};

export { Decoration };
