import ButtonComp from "./ButtonComp.jsx";
import NavBar from "./NavBar.jsx";
function Hero({ heading, para }) {
  return (
    <>
      <main className=" flex flex-col items-center w-full h-[80%] bg-hero-bgnd bg-[50%] bg-no-repeat rounded-bl-[10rem] text-white scrn600:bg-[center]">
        <div className="wrap-hero w-full max-w-[1000px] h-full">
          <NavBar />
          <div className="head-wrapper text-center flex flex-col items-center mt-[11.5rem] ">
            <h1 className=" font-semibold text-[5.2rem] scrn900:text-[4rem]">{heading} </h1>
            <p className="mt-3 mb-[4rem] text-[1.8rem] font-Overpass font-light opacity-70 tracking-wide">
              {para}
            </p>
            <div className="cta mb-[15rem]">
              <ButtonComp
                className=" me-4 text-[#ff525d] bg-white hover:bg-[#ff7a85] hover:text-white"
                text="Start for Free"
                // bg="white"
                // color="hsl(356, 100%, 66%)"
              />
              <ButtonComp
                className=" text-white border-solid border-white border-2 hover:bg-white hover:text-[#ff525d]"
                text="Learn More"
                // bg="rgba(0, 0, 0, 0)"
                // color="white"
                // borCol="1px solid  white"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
