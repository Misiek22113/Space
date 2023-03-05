import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/Pages/HomePage/HomePage";
import MoonPage from "./components/Pages/MoonPage/MoonPage";
import SolarSystem from "./components/Pages/SolarSystem/SolarSystem";
import "../styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/RootLayout/RootLayout";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import HistoryPage from "./components/Pages/HistoryPage/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/moon",
        element: <MoonPage />,
      },
      {
        path: "/HistoryPage",
        element: <HistoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
