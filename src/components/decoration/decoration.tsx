import { FC } from "react";

import styleDecoration from "./decoration.module.css";

import pinkSpermBlur from "../../images/common/pink_sperm.png";
import pinkSperm from "../../images/common/pink_sperm_1.png";
import bakti1 from "../../images/common/bakti_1.png";
import layer4 from "../../images/common/Layer 4.png";
import layer4v1 from "../../images/common/Layer 4 copy.png";
import layer4v2 from "../../images/common/Layer 4 copy 2.png";
import layer5 from "../../images/common/Layer 5.png";
import layer7 from "../../images/common/Layer 7.png";
import layer8 from "../../images/common/Layer 8.png";

const Decoration: FC = () => {
  return (
    <section className={styleDecoration.container}>
      <img
        className={styleDecoration.pinkSpermBlur}
        src={pinkSpermBlur}
        alt="сперматазоид"
      />
      <img
        className={styleDecoration.pinkSperm}
        src={pinkSperm}
        alt="сперматазоид"
      />
      <img className={styleDecoration.layer7} src={layer7} alt="палочка" />
      <img className={styleDecoration.bakti1} src={bakti1} alt="кружок" />
      <img className={styleDecoration.layer5} src={layer5} alt="кружок" />
      <img className={styleDecoration.layer8} src={layer8} alt="кружок" />
      <img className={styleDecoration.layer4} src={layer4} alt="кружок" />
      <img className={styleDecoration.layer4v2} src={layer4v2} alt="кружок" />
      <img className={styleDecoration.layer4v1} src={layer4v1} alt="кружок" />
    </section>
  );
};

export { Decoration };
