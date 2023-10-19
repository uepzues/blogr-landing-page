export default function Section2() {
  return (
    <>
      <div className="section2 items-center w-full h-[37rem] bg-section-bgnd bg-no-repeat bg-[-40%_85%] overflow-visible relative rounded-bl-[100px] rounded-tr-[100px] my-[10rem] scrn900:my-[5rem] scrn900:h-[40vh] scrn900:bg-[50%_150%]"> 
        <div className="grid grid-cols-2 max-w-[1000px] left-[50px] right-[50px] mx-auto top-[-50px] gap-10 overflow-visible absolute scrn900:flex scrn900:flex-col ">
          <div className="img scrn900:relative">
            <img
            className="ms-[-40px] scrn900:absolute scrn900:ms-0 scrn900:w-[60%] scrn900:left-[50%] scrn900:translate-x-[-50%] scrn900:top-[-13rem] scrn600:top-[-5rem] scrn600:w-[300px]"
              src="./src/images/illustration-phones.svg"
              alt="phone images"
            />
          </div>
          <div className="content my-auto text-white scrn900:mt-[20vh] scrn900:text-center">
            <h2 className="text-[3.4rem]  font-bold">
              State of the Art Infrastructure
            </h2>
            <p className="text-[1.6rem] font-light mt-10">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
