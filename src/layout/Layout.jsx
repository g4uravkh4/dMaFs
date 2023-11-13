import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Routers></Routers>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
