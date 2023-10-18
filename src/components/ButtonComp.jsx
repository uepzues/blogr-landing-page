function ButtonComp({ text, className }) {
  return (
    <>
      <button
        className={`h-[4rem] w-[13rem] text-[1.6rem] font-bold rounded-full font-Ubuntu transition ease-in-out delay-300 hover:opacity-80 ${className}`}
        // style={{ backgroundColor: bg, color: color, border: borCol }}
      >
        <p>{text}</p>
      </button>
    </>
  );
}

export default ButtonComp;
