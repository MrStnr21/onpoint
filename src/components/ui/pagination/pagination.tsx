import { FC } from "react";

import stylesPagination from "./paginaton.module.css";

import checkIcon from "../../../images/common/btn_pagination.png";

interface IPagination {
  quantity: number;
  currentPage: number;
  setCurrentPage: (arg: number) => void;
}

const Pagination: FC<IPagination> = ({
  quantity,
  currentPage,
  setCurrentPage,
}): JSX.Element => {
  const pagination: Array<number> = [];

  for (let i = 1; i <= quantity; i++) {
    pagination.push(i);
  }

  const handleSwipe = (direction: string): void => {
    if (direction === "left" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    if (direction === "right" && currentPage < quantity) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={stylesPagination.paginationContainer}>
      <button
        className={stylesPagination.leftButton}
        onClick={() => {
          handleSwipe("left");
        }}
      >
        <img
          className={stylesPagination.leftButtonIcon}
          src={checkIcon}
          alt="назад"
        />
      </button>
      {pagination.map((item, id) => {
        if (item === currentPage) {
          return (
            <div
              key={id}
              className={`${stylesPagination.pagination}  ${stylesPagination.active}`}
              onClick={() => {
                setCurrentPage(item);
              }}
            />
          );
        } else {
          return (
            <div
              key={id}
              className={`${stylesPagination.pagination}`}
              onClick={() => {
                setCurrentPage(item);
              }}
            />
          );
        }
      })}
      <button
        className={stylesPagination.rightButton}
        onClick={() => {
          handleSwipe("right");
        }}
      >
        <img
          className={stylesPagination.rightButtonIcon}
          src={checkIcon}
          alt="вперед"
        />
      </button>
    </div>
  );
};

export { Pagination };
