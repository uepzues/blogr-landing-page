import { useEffect, useState } from "react";
import ButtonComp from "./ButtonComp.jsx";
import { NavList } from "./NavList.jsx";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenu2, setMobileMenu2] = useState(false);
  const [mobileMenu3, setMobileMenu3] = useState(false);
  const [mobileBurger, setMobileBurger] = useState(false)
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setNav(newWidth > 900 ? false : true);
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  });

    const toggleVisibility = ()=>{
    setMobileMenu(!mobileMenu)
  }
  const toggleVisibility2 = ()=>{
    setMobileMenu2(!mobileMenu2)    
  }
  const toggleVisibility3 = ()=>{
    setMobileMenu3(!mobileMenu3)    
  }
  const visBurger = ()=>{
    setMobileBurger(!mobileBurger)
  }


  return (
    <>
      <nav className={`w-screen ${nav ? "visible" : "hidden"} `}>
        <div className="navMobile flex justify-between items-center mx-[20px] mt-[4rem]  relative">
          <div>
            <img src="../images/logo.svg" alt="logo image" />
          </div>
          <div className="cursor-pointer"
          onClick={visBurger}>
            <img src="../images/icon-hamburger.svg" alt="menu" />
          </div>
        </div>

        <div className={`modal ${mobileBurger?'visible': 'hidden'} absolute left-0 right-0 z-20 rounded-lg bg-white text-[#4b5862] mx-[2rem] mt-[2rem] text-[1.6rem] font-semibold`}>
          <ul>
            <li className="flex flex-col items-center justify-center h-auto">
              <div className="flex items-center mt-[5rem] cursor-pointer"
              onClick={toggleVisibility3}
              >
                Product
                <img
                  className="ms-4"
                  src="../images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
              <br />
              <ul
                className={`lv2 bg-[ff8f70] h-auto ${mobileMenu3?'block':'hidden'} static w-[80%] text-center bg-slate-200 pl-[unset]`}
              >
                <NavList
                  list2={[
                    "Overview",
                    "Pricing",
                    "Marketplace",
                    "Features",
                    "Integrations",
                  ]}
                />
              </ul>
            </li>

            <li className="flex flex-col items-center justify-center h-auto ">
              <div className="flex items-center mt-[2rem] cursor-pointer"
              onClick={toggleVisibility2}

              >
                Company
                <img
                  className="ms-4"
                  src="../images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
              <br />
              <ul
                className={`lv2  ${mobileMenu2?'block':'hidden'} bg-[ff8f70] h-auto static w-[80%] text-center bg-slate-200 pl-[unset]`}
              >
                <NavList list2={["About", "Team", "Blog", "Careers"]} />
              </ul>
            </li>
            <li className="flex flex-col items-center justify-center h-auto ">
              <div className="flex items-center mt-[2rem] cursor-pointer"
                onClick={toggleVisibility}
              >
                Connect
                <img
                  className="ms-4"
                  src="../images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
              <br />
              <ul
                className={`lv2 ${mobileMenu?'block':'hidden'} bg-[ff8f70] h-auto static w-[80%] text-center bg-slate-200 pl-[unset]`}
              >
                <NavList list2={["Contact", "Newsletter", "LinkedIn"]} />
              </ul>
            </li>
          </ul>
          <hr className="mt-[3rem] mb-[2rem] w-[80%]" />
          <div className="flex flex-col justify-center items-center pb-[3rem]">
            <p className="me-8 flex items-center mb-[2rem]">Login</p>
            <ButtonComp
              text="Sign Up"
              className="text-white me-8 bg-gradient-to-r from-[#ff7a85] to-[#ff525d] hover:bg-[#ff7a85] hover:text-white"
            />
          </div>
        </div>
      </nav>
      <nav
        className={`w-full flex flex-row mt-16 mx-8 text-[1.6rem] ${
          nav ? "hidden" : "visible"
        }`}
      >
        <div className="flex basis-[10%] justify-start items-center">
          <img
            className="flex basis-[40%] justify-start"
            src="../images/logo.svg"
            alt="logo"
          />
        </div>
        <ul className="flex flex-row basis-[60%] items-center ms-10 font-bold font-Ubuntu cursor-pointer">
          <li className="flex flex-col basis-[30%] justify-center items-center relative leading-10 ">
            <div
              className="flex flex-row items-center opacity-70 hover:underline hover:decoration-2 hover:opacity-100"
              onMouseEnter={() => setMenu(true)}
            >
              Product
              <img
                className="ms-4"
                src="../images/icon-arrow-light.svg"
                alt="arrow"
              />
            </div>
            <br />
            <ul
              className={`lv2 ${menu === true ? "flex" : ""}`}
              onMouseLeave={() => setMenu(false)}
            >
              <NavList
                list2={[
                  "Overview",
                  "Pricing",
                  "Marketplace",
                  "Features",
                  "Integrations",
                ]}
              />
            </ul>
          </li>
          <li className="flex flex-col basis-[30%] justify-center items-center relative leading-10 ">
            <div
              className=" flex flex-row items-center opacity-70 hover:underline hover:decoration-2 hover:opacity-100"
              onMouseEnter={() => setMenu2(true)}
            >
              Company
              <img
                className=" ms-4"
                src="../images/icon-arrow-light.svg"
                alt="arrow"
              />
            </div>
            <br />
            <ul
              className={`lv2 ${menu2 === true ? "flex" : ""}`}
              onMouseLeave={() => setMenu2(false)}
            >
              <NavList list2={["About", "Team", "Blog", "Careers"]} />
            </ul>
          </li>
          <li className="flex flex-col basis-[30%] justify-center items-center relative leading-10 ">
            <div
              className=" flex flex-row items-center opacity-70 hover:underline hover:decoration-2 hover:opacity-100"
              onMouseEnter={() => setMenu3(true)}
            >
              Connect
              <img
                className="ms-4"
                src="../images/icon-arrow-light.svg"
                alt="arrow"
              />
            </div>
            <br />
            <ul
              className={`lv2 ${menu3 === true ? "flex" : ""}`}
              onMouseLeave={() => setMenu3(false)}
            >
              <NavList list2={["Contact", "Newsletter", "LinkedIn"]} />
            </ul>
          </li>
        </ul>
        <div className="flex basis-[50%] justify-end flex-shrink pe-8">
          <p className="me-8 flex items-center">Login</p>
          <ButtonComp
            text="Sign Up"
            className="text-[#ff525d] me-8 bg-white hover:bg-[#ff7a85] hover:text-white"
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
