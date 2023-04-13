import { FC } from "react";

import styleMain from "./main.module.css";

import arrow from "../../images/common/arrow-right.svg";

import { Decoration } from "../decoration/decoration";

const Main: FC = () => {
  return (
    <section className={styleMain.container}>
      <div className={styleMain.title}>
        <h1 className={styleMain.hello}>привет,&nbsp;</h1>
        <h2 className={styleMain.text}>
          это<span className={styleMain.boldElement}>не</span>
        </h2>
        <h2 className={styleMain.text}>коммерческое задание</h2>
      </div>
      <button className={styleMain.buttonContainer}>
        <div className={styleMain.buttonElement}>
          <img className={styleMain.buttonArrow} src={arrow} alt="далее" />
        </div>
        <p className={styleMain.buttonText}>Что дальше?</p>
      </button>
      <Decoration />
    </section>
  );
};

export { Main };
