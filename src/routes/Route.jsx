import Home from "../pages/Home/Home";
import Author from "../pages/Author/Author";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/authors", component: Author },
  { path: "*", component: PageNotFound },
];

export { routes };
