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
}) {
  return (
    <>
      <div>
        <h3 className="text-[3.4rem] color-black font-bold  mt-[14rem] z-10 ">
          {h3}
        </h3>
        <div className="section1 w-full max-w-[1000px]  mt-[-120px] h-full grid grid-cols-2 content- bg-white">
          <div className={`info-wrap grid content-center mx-8 ${order2}`}>
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
          <div className={`info-img relative w-[800px] h-[800px] ${order1}`}>
            <img
              className={`absolute ${margin}`}
              src={`../src/images/${imgName}`}
              alt="editor image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
