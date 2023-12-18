const privateRoutes = [
  {
    path: "/",
    loader: () => import("../pages/Markets/Market"),
    exact: true,
  },
  {
    path: "/portfolio",
    loader: () => import("../pages/Portfolio/Portfolio"),
    exact: true,
  },
  {
    path: "/search",
    loader: () => import("../pages/Search/Search"),
    exact: true,
  },
  {
    path: "/trades",
    loader: () => import("../pages/Trades/TradesPage"),
    exact: true,
  },
  {
    path: "/exchange/:id",
    loader: () => import("../pages/Exchange/exchangePage"),
  },
  {
    path: "/coin/:id",
    loader: () => import("../pages/Coin/coin"),
    exact: true,
  },
  {
    path: "/explore",
    loader: () => import("../pages/Explore/ExplorePage"),
    exact: true,
  },
  {
    path: "/explore/detail/:id",
    loader: () => import("../pages/Explore/View/viewdetailTopic"),
    exact: true,
  },
  {
    path: "/profile",
    loader: () => import("../pages/Auth/Profile"),
    exact: true,
  },
];
const publicRoutes = [
  {
    path: "/auth/signin",
    loader: () => import("../pages/Auth/Signin"),
  },
  {
    path: "/auth/signup",
    loader: () => import("../pages/Auth/Signup"),
  },
];
const simpleRoute = [{}];
export default {
  privateRoutes,
  publicRoutes,
  simpleRoute,
};
