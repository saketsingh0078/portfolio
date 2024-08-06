import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

type ProjectDetails = {
  name: string;
  desc: string;
  tech: string[];
  img: string;
  liveLink: string;
  gitLink: string;
};

export const ProjectItem = ({
  name,
  desc,
  tech,
  img,
  liveLink,
  gitLink,
}: ProjectDetails) => {
  return (
    <div className="mb-8 h-full flex justify-center ">
      <div className="sm:w-[60%] w-[80%] bg-slate-600 sm:pl-8 sm:py-6 pl-4 py-2  transition-transform duration-300 transform hover:scale-[110%] border-2 rounded-lg shadow-md shadow-slate-400">
        <div className="flex gap-12 items-center">
          <h1 className="text-white text-[22px] font-bold">{name}</h1>
          <div className="flex gap-10">
            <a href={liveLink}>
              <IoIosLink className=" w-[24px] h-[24px]" />
            </a>
            <a href={gitLink}>
              <FaGithub className=" w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full h-full">
            <div className=" flex h-full ">
              <h1 className="w-[60%] sm:text-[18px] text-[14px] text-gray-400 mb-3 mr-2 ">
                {desc}
              </h1>

              <img
                className="w-[40%] sm:h-[35vh] mb-3  "
                src={img}
                alt="project_photo"
              />
            </div>

            <div>
              <ul className="flex flex-wrap sm:gap-5 gap-3">
                {tech.map((elem, index) => (
                  <li
                    key={index}
                    className="bg-slate-700 w-fit sm:px-3 sm:py-2 rounded-lg text-white px-2 py-1
                    
                    "
                  >
                    {elem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
