import Header from "./components/Header/Header";
import clsx from "clsx";
import style from "./Layout.module.scss";
import { createContext } from "react";

export const ApiUrlContext = createContext();

const Layout = ({ children }) => {
  const urlApi = "https://api.quotable.io";
  return (
    <ApiUrlContext.Provider value={urlApi}>
      <div className={clsx(style.container)}>
        <Header />
        <div className={clsx(style.content)}>{children}</div>
      </div>
    </ApiUrlContext.Provider>
  );
};

export default Layout;
