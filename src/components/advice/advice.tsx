import { FC, useState } from "react";

import stylesAdvice from "./advice.module.css";

import dishes from "../../images/advice/icon2.png";
import notes from "../../images/advice/icon1.png";

import { Decoration } from "./decoration/decoration";
import { Modal } from "../ui/modal/modal";
import { Pagination } from "../ui/pagination/pagination";
import { Button } from "../ui/button/button";

import { textAdvices } from "../utils/data";

const Advice: FC = (): JSX.Element => {
  const [modalOpen, modalSetOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //ограничиваем отрисовку элементов в попапе
  const maxElemOnPage: number = 3;
  const quantityPages: number = Math.ceil(textAdvices.length / maxElemOnPage);

  const lastElem: number = currentPage * maxElemOnPage;
  const firstElem: number = lastElem - maxElemOnPage;

  const sliceList: {
    id: number;
    text: string;
  }[] = textAdvices.slice(firstElem, lastElem);

  const handleModalOpen = (): void => {
    modalSetOpen(!modalOpen);
  };

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
        <Button text={"Подробнее"} type={"plus"} onClick={handleModalOpen} />
      </div>
      <Decoration />
      {modalOpen ? (
        <Modal onClose={handleModalOpen}>
          <div className={stylesAdvice.infoContainer}>
            <div className={stylesAdvice.titleContainerModal}>
              <h1 className={stylesAdvice.tagline}>преимущества</h1>
              <h2 className={stylesAdvice.brand}>
                brend<span className={stylesAdvice.boldElement}>xy</span>
              </h2>
            </div>
            <div className={stylesAdvice.listContainer}>
              <ul className={stylesAdvice.list}>
                {sliceList.map((item) => {
                  return (
                    <li className={stylesAdvice.listItem} key={item.id}>
                      <h3
                        className={stylesAdvice.itemTitle}
                      >{`0${item.id}`}</h3>
                      <p className={stylesAdvice.itemText}>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={stylesAdvice.paginationContainer}>
              <Pagination
                quantity={quantityPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
};

export { Advice };
