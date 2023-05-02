import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ApiUrlContext } from "../../layout/Layout";
import clsx from "clsx";
import style from "./Author.module.scss";

const Author = () => {
  const [data, setData] = useState([]);
  const [arrayPage, setArrayPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const urlApi = useContext(ApiUrlContext);

  useEffect(() => {
    fetch(urlApi + "/authors?limit=150")
      .then((res) => res.json())
      .then((x) => {
        setArrayPage(() => {
          let arr = [];
          for (let i = 1; i <= x.totalPages; i++) {
            arr = [...arr, i];
          }
          return [...arr];
        });
      });
  }, []);

  useEffect(() => {
    fetch(urlApi + `/authors?limit=150&page=${currentPage}`)
      .then((res) => res.json())
      .then((x) => setData(x.results));
  }, [currentPage]);

  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.page)}>
        {arrayPage.map((item, index) => {
          return (
            <div
              className={
                currentPage === item ? clsx(style.active) : clsx(style.button)
              }
              onClick={() => setCurrentPage(item)}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={clsx(style.authors)}>
        {data.map((item, index) => {
          return (
            <Link
              className={clsx(style.link)}
              key={index}
              to={"/authors/" + item?.slug}
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Author;
