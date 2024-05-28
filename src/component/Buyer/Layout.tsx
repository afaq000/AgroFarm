import React, { ReactNode, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="w-full h-screen flex flex-col" >
      <div className="w-full">
       <Navbar/>
      </div>
      <div className="flex-1" id="scroll-2">{children}</div>
      <div className="w-full">
        <Footer className={""} />
      </div>
    </div>
  );
};

export default Layout;
