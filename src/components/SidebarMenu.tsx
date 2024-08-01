import { useRef, useEffect } from "react";
import { HeaderItems } from "./HeaderItems";
import { IoMdClose } from "react-icons/io";

export default function SidebarMenu({
  sectionRefs,
  activeSection,
  setSideMenu,
}: any) {
  const sidebarRef = useRef<any>(null);

  const handleScroll = (section: any) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickOutside = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSideMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="sm:hidden fixed z-20 w-[50%] bg-slate-700 top-0 h-screen text-white text-[20px]"
    >
      <div className="flex justify-end p-1">
        <IoMdClose
          className="text-end w-[24px] h-[24px] cursor-pointer"
          onClick={() => setSideMenu(false)}
        />
      </div>
      <div className="p-4">
        <ul className="flex flex-col gap-3 bg-slate-700 rounded-full h-[6.8vh] p-2">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
            (section) => (
              <li
                key={section}
                className={`cursor-pointer text-white rounded-full px-[10px] py-[3px] hover:text-gray-800 ${
                  activeSection === section
                    ? "text-blue bg-gray-600 transition ease-in-out"
                    : "transition ease-in-out"
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
}
