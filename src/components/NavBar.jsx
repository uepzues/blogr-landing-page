import { useEffect, useState } from "react";
import ButtonComp from "./ButtonComp.jsx";
import { NavList } from "./NavList.jsx";
function NavBar() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setNav(newWidth > 900 ? false : true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <nav className={`w-screen ${nav ? "visible" : "hidden"}`}>
        <div className="navMobile flex justify-between items-center mx-[20px] mt-[4rem]">
          <div>
            <img src="../src/images/logo.svg" alt="logo image" />
          </div>
          <div className="cursor-pointer">
            <img src="../src/images/icon-hamburger.svg" alt="menu" />
          </div>
        </div>

        <div className="modal rounded-lg bg-white text-[#4b5862] mx-[2rem] mt-[2rem] text-[1.6rem] font-semibold">
          <ul>
            <li className="">
              <div className="flex items-center justify-center pt-[2rem] ">
                Product
                <img
                  className="ms-4"
                  src="../src/images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center pt-[2rem] ">
                Company
                <img
                  className="ms-4"
                  src="../src/images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center pt-[2rem] ">
                Connect
                <img
                  className="ms-4"
                  src="../src/images/icon-arrow-dark.svg"
                  alt="arrow"
                />
              </div>
            </li>
          </ul>
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
            src="../src/images/logo.svg"
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
                src="../src/images/icon-arrow-light.svg"
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
                src="../src/images/icon-arrow-light.svg"
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
                src="../src/images/icon-arrow-light.svg"
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
