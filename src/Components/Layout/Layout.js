import React, { useEffect, useState } from "react";
import Routing from "../../Routes/Routing";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
// import Header from "../Header/Header";

const Layout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").classList.remove("hidden");
      } else {
        document.querySelector(".header").classList.add("hidden");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      {/* <Header header={headerTop} /> */}
      <NavBar />
      <div className="mt-[6rem]">
        <Routing />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
