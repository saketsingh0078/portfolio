import { HeaderItems } from "./HeaderItems";

export const Header = () => {
  return (
    <div className="bg-slate-800">
      <div className="p-2.5">
        <ul className=" flex gap-3 justify-center bg-slate-700 mx-[31vw] rounded-full h-[6.8vh] items-center">
          <HeaderItems props="Home" />
          <HeaderItems props="About" />
          <HeaderItems props="Experience" />
          <HeaderItems props="Skills" />
          <HeaderItems props="Projects" />
          <HeaderItems props="Contact" />
        </ul>
      </div>
    </div>
  );
};
