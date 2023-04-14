import { FC } from "react";

import stylesMessage from "./message.module.css";

import spermGroup from "../../images/message/spermGroup.png";

const Message: FC = () => {
  return (
    <section className={stylesMessage.container}>
      <h1 className={stylesMessage.title}>текст сообщения</h1>
      <div className={stylesMessage.infoContainer}>
        <div className={stylesMessage.backgroundText} />
        <div className={stylesMessage.info}>
          <p className={stylesMessage.text}>
            <span className={stylesMessage.boldElement}>
              Lorem ipsum dolor sit amet
            </span>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
            <span className={stylesMessage.boldElement}>
              Lorem ipsum dolor sit amet
            </span>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
            <span className={stylesMessage.boldElement}>
              Lorem ipsum dolor sit amet
            </span>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
            <span className={stylesMessage.boldElement}>
              Lorem ipsum dolor sit amet
            </span>
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
            aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
            sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
            interdum consectetur libero id. Nec ullamcorper sit amet risus
            nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
            sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
            mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
            tortor condimentum lacinia. Et malesuada fames ac turpis egestas
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
          </p>
        </div>
      </div>
      <img
        className={stylesMessage.spermGroup}
        src={spermGroup}
        alt="сперматазоиды"
      />
    </section>
  );
};

export { Message };
