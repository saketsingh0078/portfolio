type ProjectDetails = {
  name: string;
  desc: string;
  tech: string[];
  img: string;
};

export const ProjectItem = ({ name, desc, tech, img }: ProjectDetails) => {
  return (
    <div className="mb-8 h-full">
      <div className="w-[50vw] h-fit bg-slate-600 px-8 py-6">
        <div className="flex p-1">
          <h1 className="text-white text-[1.3vw] font-bold">{name}</h1>
          <a href="" className=""></a>
        </div>
        <div>
          <div className="flex">
            <div className=" w-[70%] mr-2">
              <h1 className="text-[1.2vw] text-gray-400 mb-3 ">{desc}</h1>
              <div>
                <ul className="flex flex-wrap gap-5">
                  {tech.map((elem, index) => (
                    <li
                      key={index}
                      className="bg-slate-700 w-fit px-3 py-2 rounded-lg"
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img className="w-[30%] h-[250px]" src={img} alt="project_photo" />
          </div>
        </div>
      </div>
    </div>
  );
};
