import { FC, useState } from "react";

import styleApp from "./app.module.css";

import logoHome from "../../images/logo/home.svg";
import logoCompany from "../../images/logo/logo_onpoint.svg";

import { Main } from "../main/main";
import { Message } from "../message/message";
import { Advice } from "../advice/advice";

const App: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(0);

  const handleStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const tapStart = Math.ceil(event.changedTouches[0].clientX);
    setPositionX(tapStart);
  };

  const handleEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const tapEnd = Math.floor(event.changedTouches[0].clientX);
    let resultX = positionX - tapEnd;

    if (resultX > 25 && currentPage <= 1) {
      setCurrentPage(currentPage + 1);
    }
    if (resultX < -25 && currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className={styleApp.container}>
      <img
        className={styleApp.logoHome}
        src={logoHome}
        alt="Домой"
        onClick={() => {
          setCurrentPage(0);
        }}
      />
      <img className={styleApp.logoCompany} src={logoCompany} alt="Onpoint" />
      <div
        className={styleApp.carousel}
        style={{
          transform: `translateX(${currentPage * -100}vw)`,
          transition: "transform 500ms ease-in-out",
        }}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <Main setCurrentPage={() => setCurrentPage(1)} />
        <Message />
        <Advice />
      </div>
    </section>
  );
};

export { App };
