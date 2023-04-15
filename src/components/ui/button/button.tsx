import { FC } from "react";

import stylesButton from "./button.module.css";

import arrowIcon from "../../../images/common/arrow-right.svg";
import plusIcon from "../../../images/common/plus.svg";

interface IButton {
  text: string;
  type: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ text, type, onClick }): JSX.Element => {
  return (
    <>
      <button
        className={
          type === "plus"
            ? `${stylesButton.buttonContainer} ${stylesButton.buttonContainerPlus}`
            : `${stylesButton.buttonContainer}`
        }
        onClick={onClick}
      >
        <div className={stylesButton.buttonElement}>
          <img
            className={stylesButton.buttonArrow}
            src={type === "plus" ? plusIcon : arrowIcon}
            alt="иконка"
          />
        </div>
        <p className={stylesButton.buttonText}>{text}</p>
      </button>
    </>
  );
};

export { Button };
