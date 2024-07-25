import profilePhoto from "../assets/photo.png";

export const Home = () => {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1KqYBfwcCDQITE0CpT4BT7w8GFH0_Vqej";

  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 h-[90vh]  w-full">
      <div className="flex flex-col justify-center items-center ">
        <img
          className="rounded-full w-[100px] h-[100px] border-[6px]  mt-20"
          src={profilePhoto}
          alt="profile-photo"
        />
        <span className="text-4xl absolute top-[29%] left-[50%] opacity-90">
          👋
        </span>
        <div className="w-[50%] mt-3">
          <h1 className="text-[1.7vw] text-white text-center ">
            <span className="font-bold ">Hi, I'm Saket. </span>I’m a
            <span className="font-bold animate-jump">
              {" "}
              Full-stack developer{" "}
            </span>
            with
            <span className="font-bold"> 2 years </span>
            <br /> of experience in creating engaging web applications. <br />I
            specialize in <span className=" underline font-bold">React </span>
            and <span className=" underline font-bold">Next.js</span>, and I
            enjoy turning ideas into functional and attractive digital
            experiences.
            <br />
            I’m passionate about solving problems and delivering high-quality
            work.
          </h1>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="bg-slate-800 rounded-full px-4 py-3 text-lg text-white">
            Conatact me
          </button>
          <a
            href={resumeLink}
            className="bg-slate-800 rounded-full px-4 py-3 text-lg text-white"
          >
            Download Resume
          </a>
          <button className="bg-slate-800 rounded-full px-5 py-2 text-lg text-white">
            L
          </button>
          <button className="bg-slate-800 rounded-full px-5 py-2 text-lg text-white">
            G
          </button>
        </div>

        <div className="border-2 h-16 border-gray-400 mt-8"></div>
      </div>
    </div>
  );
};
