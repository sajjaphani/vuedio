import About from "../About";
import Home from "../Home";
import NewPost from "../NewPost";
import ViewPost from "../ViewPost";
import NotFound from "../NotFound";
import Feed from "../Feed";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "/posts/new",
    exact: true,
    component: NewPost
  },
  {
    path: "/posts/:id",
    exact: true,
    component: ViewPost
  },
  {
    path: "/feed",
    exact: true,
    component: Feed
  },
  {
    path: "/feed/:feedId",
    exact: true,
    component: Feed
  },
  {
    component: NotFound
  }
];

const clientRoutes = routes;
export default clientRoutes;
