import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import MoonPage from "../MoonPage/MoonPage";

createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moon",
    element: <MoonPage />,
  },
]);

const Router = () => {};

export default Router;
