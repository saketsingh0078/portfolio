import { useState } from "react";
import { HeaderItems } from "./HeaderItems";
import { IoIosMenu } from "react-icons/io";
import SidebarMenu from "./SidebarMenu";

export const Header = ({ sectionRefs, activeSection }: any) => {
  const [sideMenu, setSideMenu] = useState(true);

  const handleScroll = (section: any) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" fixed bg-slate-800 z-10 w-full sm:block">
      <div className="sm:hidden flex justify-end mr-6 p-3 ">
        <IoIosMenu
          className="text-white w-[40px] h-[40px] cursor-pointer"
          onClick={() => {
            setSideMenu(!sideMenu);
          }}
        />
      </div>

      <div className=" hidden pt-4 pb-4 sm:flex justify-center">
        <ul className="flex gap-3 justify-center text-[18px] w-fit bg-slate-700  rounded-full h-[6.8vh] items-center p-4">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
            (section) => (
              <li
                key={section}
                className={`cursor-pointer  text-white rounded-full px-[10px] py-[3px] ${
                  activeSection === section
                    ? "text-white  bg-gray-600   transition ease-in-out"
                    : "transition ease-in-out "
                }`}
                onClick={() => handleScroll(section)}
              >
                <HeaderItems props={section} />
              </li>
            )
          )}
        </ul>
      </div>

      {sideMenu && (
        <SidebarMenu
          sectionRefs={sectionRefs}
          activeSection={sectionRefs}
          setSideMenu={setSideMenu}
        />
      )}
    </div>
  );
};
