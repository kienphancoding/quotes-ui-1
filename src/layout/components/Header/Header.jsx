import clsx from "clsx";
import style from "./Header.module.scss";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import { Link } from "react-router-dom";

const Header = () => {
  const list = [
      { name: "Home", path: "/" },
      { name: "Authors", path: "/authors" },
    { name: "Topics", path: "/topics" },
  ];
  return (
    <div className={clsx(style.wrapper)}>
      <HeaderLogo />
      <div>
      {list.map((item, index) => {
        return (
          <Link className={window.location.pathname===item.path?clsx(style.link,style.active):clsx(style.link)} key={index} to={item.path}>
            {item.name}
          </Link>
        );
      })}
      </div>
      <HeaderSearch />
    </div>
  );
};

export default Header;
