import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/Pages/HomePage/HomePage";
import MoonPage from "./components/Pages/MoonPage/MoonPage";
import "../styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moon",
    element: <MoonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
