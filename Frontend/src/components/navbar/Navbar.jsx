import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { navdata } from "./navdata.jsx";
import UpperNav from "./UpperNav.jsx";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDrawer, setDrawer] = useState(false);

  const handleNavClick = () => {
    // window.screenY === 0;
    setDrawer(false);
  };

  const cartList = JSON.parse(localStorage.getItem("cartItem"));

  return (
    <>
      <div className="w-full shadow-md md:relative ">
        {!openDrawer && <UpperNav />}
        <div className="max-w-[1280px] mx-auto ">
          {/* desktop-navbar */}
          <div className=" hidden md:flex max-w-[1280px] mx-4 md:mx-24 h-20 justify-between items-center text-white ">
            {/* desktop-logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
              <div
                className="uppercase font-bold text-2xl tex text-primary cursor-pointer"
                onClick={() => navigate("/")}
              >
                GadgetGalaxy
              </div>
            </div>
            {/* desktop-navlist */}
            <div className="hidden md:flex items-center px-8 py-2 gap-8 font-semibold bg-primary rounded-md">
              {navdata.map((nav) => (
                <NavLink
                  to={nav.path}
                  key={nav.id}
                  className="  px-4 py-2 cursor-pointer hover:bg-white hover:rounded-md hover:text-primary"
                >
                  {nav.title}
                </NavLink>
              ))}
              <p
                className=" relative p-2 rounded-md cursor-pointer"
                onClick={() => navigate("/myCart")}
              >
                <FaShoppingCart size={25} color="white" />
                <span className=" absolute top-0 -right-2 py-1 px-2 text-xs bg-red-500 rounded-full flex items-center justify-center">
                  {cartList?.length ?? 0}
                </span>
              </p>
            </div>
          </div>
          {/* mobile-navbar */}
          <div
            className={`md:hidden flex flex-col justify-between relative inset-0 bg-red-300  ${
              openDrawer ? "fixed" : ""
            }`}
          >
            {/* mobile-nav-logo-Hamburger */}
            <div
              className={` px-4  flex justify-between items-center h-20 w-full bg-white z-30 ${
                openDrawer ? "fixed" : "relative"
              }`}
            >
              <div className="flex items-center gap-2 ">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="uppercase font-bold text-2xl tex text-primary">
                  Logo
                </div>
              </div>

              <div className="md:hidden flex flex-col">
                {openDrawer ? (
                  <CgClose
                    size={35}
                    color="purple"
                    className="cursor-pointer"
                    onClick={() => setDrawer((prev) => !prev)}
                  />
                ) : (
                  <CgMenuRightAlt
                    size={35}
                    color="purple"
                    className="cursor-pointer"
                    onClick={() => setDrawer((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            {/* mobile-navbar-drawer */}

            {openDrawer && (
              <div className="bg-[rgba(0,0,0,0.6)] fixed inset-0 z-20 w-full h-full">
                <div
                  className={`flex flex-col items-center justify-between mt-20 w-full  shadow-md h-2/3   bg-white`}
                >
                  {navdata.map((nav) => (
                    <Link
                      to={nav.path}
                      onClick={handleNavClick}
                      key={nav.id}
                      className=" w-full h-full py-6 font-semibold text-center cursor-pointer  border-t-2 hover:bg-zinc-50 hover:text-primary "
                    >
                      {nav.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
