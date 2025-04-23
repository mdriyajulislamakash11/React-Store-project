import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CategoriesCard from "../components/CategoriesCard";
import CoffeeDetails from "../pages/CoffeeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CategoriesCard />,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CategoriesCard />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);

export default routes;
