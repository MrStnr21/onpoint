import { FC } from "react";

import styleApp from "./app.module.css";

import logoHome from "../../images/logo/home.svg";
import logoCompany from "../../images/logo/logo_onpoint.svg";

import { Main } from "../main/main";
import { Message } from "../message/message";

const App: FC = () => {
  return (
    <section className={styleApp.container}>
      <img className={styleApp.logoHome} src={logoHome} alt="Домой" />
      <img className={styleApp.logoCompany} src={logoCompany} alt="Onpoint" />
      <div className={styleApp.content}>
        <Main />
        <Message />
      </div>
    </section>
  );
};

export { App };
