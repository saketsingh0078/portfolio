import profilePhoto from "../assets/photo.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Home = ({ contactRefs }: any) => {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1zYAPtDFVVavP9kTCKbgYui_88BhS43eV";

  return (
    <div className=" bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 h-fit w-full pt-10 pb-32">
      <div className="flex flex-col justify-center items-center ">
        <img
          className="rounded-full w-[100px] h-[100px] border-[6px]  mt-20"
          src={profilePhoto}
          alt="profile-photo"
        />
        <span className="text-4xl absolute top-[26%] left-[50%] opacity-90 z-0 animate-pulse">
          👋
        </span>
        <div className="w-[80%] text-[22px] sm:w-[50%] sm:text-[24px] mt-6 ">
          <h1 className=" text-white text-center ">
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

        <div className="mt-6 flex sm:gap-3 gap-6">
          <button
            className="bg-slate-800 rounded-full sm:px-4 sm:py-3 sm:text-lg text-md px-3 py-2 text-white transition-transform duration-300 transform hover:scale-110"
            onClick={() => {
              contactRefs.current.scrollIntoView({ behavior: "smooth" });
              console.log(contactRefs);
            }}
          >
            Contact me
          </button>
          <a
            href={resumeLink}
            className="bg-slate-800 rounded-full sm:px-4 sm:py-3 sm:text-lg text-md px-3 py-2 text-white transition-transform duration-300 transform hover:scale-125"
          >
            Download Resume
          </a>
          <button className="bg-slate-800 rounded-full sm:px-4 sm:py-3 sm:text-lg text-md px-2 py-2 text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://github.com/saketsingh0078">
              <CiLinkedin className="w-[24px] h-[24px]" />
            </a>
          </button>
          <button className="bg-slate-800 rounded-full sm:px-4 sm:py-3 sm:text-lg text-md px-2 py-2 text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://github.com/saketsingh0078">
              <FaGithub className="w-[24px] h-[24px]" />
            </a>
          </button>
        </div>
        <div className="border-2 h-16 border-gray-400 mt-8"></div>
      </div>
    </div>
  );
};
