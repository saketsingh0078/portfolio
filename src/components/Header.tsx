import { HeaderItems } from "./HeaderItems";

export const Header = ({ sectionRefs, activeSection }: any) => {
  const handleScroll = (section: any) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bg-slate-800 z-10 w-full ">
      <div className="pt-4 pb-4 flex justify-center">
        <ul className="flex gap-3 justify-center text-[18px] w-fit bg-slate-700  rounded-full h-[6.8vh] items-center p-4">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
            (section) => (
              <li
                key={section}
                className={`cursor-pointer ${
                  activeSection === section
                    ? "text-white cursor-pointer bg-gray-600 rounded-full px-[10px] py-[3px]  transition ease-in-out"
                    : " text-white px-[10px] py-[3px]  "
                }`}
                onClick={() => handleScroll(section)}
              >
                <HeaderItems props={section} />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
