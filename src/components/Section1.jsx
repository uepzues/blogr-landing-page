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
      <h3 className="text-[3.8rem] text-[#1f3f5b]  font-bold  tracking-tight mt-[15rem] z-10 scrn900:mt-[5rem] text-center scrn400:text-[2.8rem] scrn400:mt-[10rem]">
        {h3}
      </h3>
      <section className="section1 w-full max-w-[1150px]  mt-[-12rem] h-full grid grid-cols-2 scrn900:flex scrn900:flex-col scrn900:mt-[5rem] scrn900:text-center content- bg-white scrn900:mb-[15rem]">
        <div
          className={`info-wrap grid content-center mx-8 ${order2} scrn900:order-2`}
        >
          <div className="content1">
            <h2 className="text-[3rem] text-[#1f3f5b]  font-semibold  mt-[-30rem] scrn900:mt-[10rem] scrn400:mt-[6rem] scrn400:text-[2.8rem]">
              {headingText}
            </h2>
            <p className="my-[3rem] text-[1.6rem] leading-relaxed">{para}</p>
          </div>
          <div className="content2">
            <h2 className="text-[3rem] text-[#1f3f5b] font-semibold ">
              {headingText2}
            </h2>
            <p className="my-[3rem] text-[1.6rem] leading-relaxed">{para2}</p>
          </div>
        </div>
        <div
          className={`info-img relative w-[1200px] h-[1200px] ${order1}  scrn900:order-1 scrn900:flex scrn900:w-auto scrn900:h-auto scrn900:items-center`}
        >
          <img
            className={`absolute  scrn900:static scrn900:m-auto ${margin} scrn900:h-[50%]`}
            src={`../images/${screenWidth > 900 ? imgName : imgMobile}`}
            alt="editor image"
          />
        </div>
      </section>
    </>
  );
}

export default Section1;
