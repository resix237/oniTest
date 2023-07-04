import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import DropDownLang from "./DropDownLang";
import ButtonHomeOni from "./ButtonHomeOni";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/nav.css";
import { BsChevronRight } from "react-icons/bs";

function Navbar({setuser}) {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen);
  };
 

  return (
    <header className=" shadow-lg lg:shadow-none px-5 bg-grayOni lg:bg-transparent  fixed top-0  w-full">
      <a
        className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#"
      >
        <img
          className="mr-2 h-16 lg:h-24 "
          src={logo}
          alt="ONI logo"
          loading="lazy"
        />
      </a>
      <div>
        <nav ref={navRef}>
          {isOpen ? (
            <div className="py-20 flex flex-col px-10 w-full text-black ">
              <div onClick={setuser} className="font-Roboto flex justify-between px-5 my-3 w-full  font-semibold uppercase tracking-widest  text-md cursor-pointer">
                <h1>Compte Pro </h1>
                <span>
                  <BsChevronRight className="font-bold text-xl" />{" "}
                </span>
              </div>
              <div  onClick={setuser} className="font-Roboto flex justify-between px-5 my-3 w-full font-semibold uppercase tracking-widest text-md cursor-pointer">
                <h1>Connexion </h1>
                <span>
                  <BsChevronRight className="font-bold text-xl" />{" "}
                </span>
              </div>
              <div className="w-full flex justify-start">
			  <DropDownLang color={"black"}/>
            </div>
				</div>
          ) : (
            <>
              <ButtonHomeOni text={"Compte Pro"} onClick={setuser} />
              <ButtonHomeOni text={"Connexion"}  onClick={setuser} />
              <DropDownLang />
            </>
          )}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
