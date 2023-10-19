import { useState, useEffect } from "react";

function Section1({
  para,
  headingText,
  headingText2,
  para2,
  order1,
  order2,
  h3,
  imgName,
  margin,
  imgMobile,
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h3 className="text-[3.4rem] color-black font-bold  mt-[14rem] z-10 scrn900:mt-[5rem] ">
        {h3}
      </h3>
      <div className="section1 w-full max-w-[1000px]  mt-[-120px] h-full grid grid-cols-2 scrn900:flex scrn900:flex-col scrn900:mt-[5rem] scrn900:text-center content- bg-white scrn900:mb-[15rem]">
        <div
          className={`info-wrap grid content-center mx-8 ${order2} scrn900:order-2`}
        >
          <div className="content1">
            <h2 className="text-[2.6rem] font-semibold  mt-[40px]">
              {headingText}
            </h2>
            <p className="my-[3rem] text-[1.6rem]">{para}</p>
          </div>
          <div className="content2">
            <h2 className="text-[2.6rem] font-semibold mt-[3.5rem] ">
              {headingText2}
            </h2>
            <p className="my-[3rem] text-[1.6rem]">{para2}</p>
          </div>
        </div>
        <div
          className={`info-img relative w-[800px] h-[800px] ${order1}  scrn900:order-1 scrn900:flex scrn900:w-auto scrn900:h-auto scrn900:items-center`}
        >
          <img
            className={`absolute  scrn900:static scrn900:m-auto ${margin} scrn900:h-[50%]`}
            src={`../src/images/${screenWidth > 900 ? imgName : imgMobile}`}
            alt="editor image"
          />
        </div>
      </div>
    </>
  );
}

export default Section1;
