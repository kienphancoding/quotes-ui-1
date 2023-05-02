import { useEffect, useState, useContext } from "react";
import { ApiUrlContext } from "../../layout/Layout";
import clsx from "clsx";
import style from "./Tag.module.scss";
import { Link } from "react-router-dom";

const Tag = () => {
  const [data, setData] = useState([]);

  const urlApi = useContext(ApiUrlContext);

  useEffect(() => {
    fetch(urlApi + "/tags")
      .then((res) => res.json())
      .then((x) => setData(x));
  }, []);

  return (
    <div className={clsx(style.authors)}>
      {data.map((item, index) => {
        return (
          <Link
            className={clsx(style.link)}
            key={index}
            to={"/tags/" + item?.slug}
          >
            {item?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Tag;
