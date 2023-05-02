import clsx from "clsx";
import style from "./Home.module.scss";
import { useContext, useEffect, useState } from "react";
import { ApiUrlContext } from "../../layout/Layout";

const Home = () => {
  const [randomQuotes, setRandomQuotes] = useState([]);

  const urlApi = useContext(ApiUrlContext);

  useEffect(() => {
    fetch(urlApi + "/quotes/random?limit=50")
      .then((res) => res.json())
      .then((data) => setRandomQuotes(data));
  }, []);

  const listImg = [
    "https://i.pinimg.com/564x/54/c7/04/54c7047d2fc96ea83df7bb4f1f7812de.jpg",
    "https://i.pinimg.com/736x/06/1d/e6/061de65b8460a4b05b8a7cc51543c58a.jpg",
    "https://i.pinimg.com/736x/46/78/ae/4678ae14732ba1ed9380218657e89a58.jpg",
    "https://i.pinimg.com/564x/e6/5f/64/e65f641e7424e6bb3d720bbeec004eaa.jpg",
    "https://i.pinimg.com/564x/78/72/b3/7872b3c18ae7e98ab5261335e9afd19b.jpg",
    "https://i.pinimg.com/564x/46/45/94/464594950989329c767366a98318d838.jpg",
    "https://i.pinimg.com/564x/85/04/eb/8504ebc06615fe93ae0f57e00fb91171.jpg",
    "https://i.pinimg.com/564x/a9/b5/ce/a9b5cecb004350f7e20f0b0b5d51ac41.jpg",
    "https://i.pinimg.com/564x/6d/eb/11/6deb114b88a4bf664c8c6b7a64cd10ab.jpg",
    "https://i.pinimg.com/564x/08/e5/2e/08e52e7a859ccd384caa27d3da0ce76d.jpg",
    "https://i.pinimg.com/564x/c8/bf/68/c8bf68b3f6d25fcab2c7493604b65f02.jpg",
    "https://i.pinimg.com/564x/f1/b8/4e/f1b84e616404ddb702ade87b0b8399db.jpg"
  ];
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.someQuotes)}>
        {randomQuotes.map((item, index) => {
          return (
            <figure key={index} className={clsx(style.snip1574)}>
              <img
                src={listImg[Math.floor(Math.random() * listImg.length)]}
                alt="Anh phong canh"
              />
              <figcaption>
                <blockquote>
                  <p>{item?.content}</p>
                </blockquote>
                <h3>{item?.author}</h3>
                {item?.tags.map((i, y) => {
                  return <h5 key={y}>{i}</h5>;
                })}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
