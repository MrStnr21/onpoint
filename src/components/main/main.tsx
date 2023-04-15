import { FC } from "react";

import styleMain from "./main.module.css";

import { Decoration } from "./decoration/decoration";
import { Button } from "../ui/button/button";

interface IMain {
  setCurrentPage: () => void;
}

const Main: FC<IMain> = ({ setCurrentPage }): JSX.Element => {
  return (
    <section className={styleMain.container}>
      <div className={styleMain.title}>
        <h1 className={styleMain.hello}>привет,&nbsp;</h1>
        <h2 className={styleMain.text}>
          это<span className={styleMain.boldElement}>не</span>
        </h2>
        <h2 className={styleMain.text}>коммерческое задание</h2>
      </div>
      <div className={styleMain.button}>
        <Button
          text={"Что дальше?"}
          type={"Further"}
          onClick={setCurrentPage}
        />
      </div>
      <Decoration />
    </section>
  );
};

export { Main };
