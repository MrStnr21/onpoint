import { FC } from "react";

import stylesModal from "./modal.module.css";

import closeIcon from "../../../images/common/icons8-close.svg";

interface IModal {
  onClose: () => void;
  children: JSX.Element;
}

const Modal: FC<IModal> = ({ children, onClose }): JSX.Element => {
  return (
    <section className={stylesModal.overlay}>
      <div className={stylesModal.container}>
        <button className={stylesModal.closeButton} onClick={onClose}>
          <img
            className={stylesModal.closeIcon}
            src={closeIcon}
            alt="закрыть"
          />
        </button>
        {children}
      </div>
    </section>
  );
};

export { Modal };
