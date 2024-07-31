export const Skill = () => {
  return (
    <div className="h-[45vh] w-full bg-slate-900 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[2.2vw] font-bold text-white pt-6">My Skills</h1>

        <div className=" w-[50%] mt-10">
          <ul className="flex flex-wrap gap-4 justify-center text-[1.4vw] text-white ">
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">HTML</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">CSS</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">
              Javascript
            </li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">React</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Next.js</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Node.js</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Git</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">
              Tailwind
            </li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">MongoDb</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">
              Postgres
            </li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Redux</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Recoil</li>
            <li className="bg-slate-600 w-fit px-3 py-2 rounded-lg">Express</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
