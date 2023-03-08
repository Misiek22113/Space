import Navbar from "../../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </>
  );
};

export default RootLayout;
