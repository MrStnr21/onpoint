import { FC } from "react";

import stylesAdvice from "./advice.module.css";

import { Button } from "../ui/button/button";

import dishes from "../../images/advice/icon2.png";
import notes from "../../images/advice/icon1.png";

import { Decoration } from "./decoration/decoration";

const Advice: FC = () => {
  return (
    <section className={stylesAdvice.container}>
      <div className={stylesAdvice.titleContainer}>
        <h1 className={stylesAdvice.tagline}>ключевое сообщение</h1>
        <h2 className={stylesAdvice.brand}>
          brend<span className={stylesAdvice.boldElement}>xy</span>
        </h2>
      </div>
      <div className={stylesAdvice.hintsContainer}>
        <div className={stylesAdvice.hinFirst}>
          <img className={stylesAdvice.iconDishes} src={dishes} alt="иконка" />
          <p
            className={`${stylesAdvice.hintText} ${stylesAdvice.hintFirstText}`}
          >
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
        </div>
        <div className={stylesAdvice.hintSecond}>
          <img className={stylesAdvice.iconNotes} src={notes} alt="иконка" />
          <p
            className={`${stylesAdvice.hintText} ${stylesAdvice.hintSecondText}`}
          >
            A arcu cursus vitae
          </p>
        </div>
      </div>
      <div className={stylesAdvice.button}>
        <Button text={"Подробнее"} type={"plus"} />
      </div>
      <Decoration />
    </section>
  );
};

export { Advice };
