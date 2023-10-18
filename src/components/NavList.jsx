export function NavList({ list2 }) {
  return (
    <>
      <div className="text-black">
        <ul className="text-[1.4rem] leading-loose opacity-70 font-normal">
          {list2.map((x, key) => {
            return (
              <li className='hover:font-semibold' key={key}>
                <a href="#">{x}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
