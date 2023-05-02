import Home from "../pages/Home/Home";
import Author from "../pages/Author/Author";
import Tag from "../pages/Tag/Tag";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "/authors", component: Author },
  { path: "/tags", component: Tag },
  { path: "*", component: PageNotFound },
];

export { routes };
