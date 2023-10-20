export default function Section2() {
  return (
    <>
      <section className="section2 w-full h-[40rem] bg-section-bgnd bg-no-repeat bg-[-40%_85%] overflow-visible relative rounded-bl-[100px] rounded-tr-[100px] mt-[-27rem] scrn900:my-[5rem] scrn900:h-[70vh] scrn900:bg-[50%_150%] scrn600:h-[80vh] scrn400:mt-[12rem]">
        <div className="grid grid-cols-2 max-w-[1150px] left-[0] right-[0] mx-[2rem] top-[-50px] gap-10 overflow-visible absolute scrn900:flex scrn900:flex-col ">
          <div className="img scrn900:relative">
            <img
              className="ms-[-40px] scrn900:absolute scrn900:ms-0 scrn900:w-[] scrn900:left-[50%] scrn900:translate-x-[-50%] scrn900:top-[-13rem] scrn600:top-[-10rem]"
              src="../images/illustration-phones.svg"
              alt="phone images"
            />
          </div>
          <div className="content mt-[15rem] text-white scrn900:mt-[40rem] scrn900:text-center scrn600:mt-[70vw] ">
            <h2 className="text-[4rem] tracking-tighter font-bold scrn600:text-[4rem] leading-[1.5]">
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
      </section>
    </>
  );
}
