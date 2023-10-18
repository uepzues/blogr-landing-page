export default function Section2() {
  return (
    <>
      <div className="section2 items-center w-full h-[37rem] bg-section-bgnd bg-no-repeat bg-[-40%_85%] overflow-visible relative rounded-bl-[100px] rounded-tr-[100px] my-[5rem]">
        <div className="grid grid-cols-2 max-w-[1000px] left-[50px] right-[50px] mx-auto top-[-50px] gap-10 overflow-visible absolute">
          <div className="img ">
            <img
            className="ms-[-40px]"
              src="../src/images/illustration-phones.svg"
              alt="phone images"
            />
          </div>
          <div className="content my-auto text-white ">
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
