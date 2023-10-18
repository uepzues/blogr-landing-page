export default function List({ head, list }) {
  return (
    <>
      <div className="text-[#c8c8cb] scrn900:mt-[4rem] ">
        <h4 className=" scrn900:text-center font-bold text-[1.6rem]">{head}</h4>
        <ul className=" text-[1.6rem] mt-[2rem] leading-loose text-opacity-70">
          {list.map((x, key) => (
            <li
              className="scrn900:text-center hover:underline hover:decoration-2"
              key={key}
            >
              <a href="#">{x}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
