import { FC } from "react";

import stylesButton from "./button.module.css";

import arrowImage from "../../../images/common/arrow-right.svg";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }) => {
  return (
    <>
      <button className={stylesButton.buttonContainer}>
        <div className={stylesButton.buttonElement}>
          <img
            className={stylesButton.buttonArrow}
            src={arrowImage}
            alt="далее"
          />
        </div>
        <p className={stylesButton.buttonText}>{text}</p>
      </button>
    </>
  );
};

export { Button };
