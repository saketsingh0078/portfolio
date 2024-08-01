import { ProjectItem } from "./ProjectItem";
import projectImg1 from "../assets/img1.png";
import projectImg2 from "../assets/img2.png";
import projectImg3 from "../assets/img3.png";

export const Project = () => {
  const project1 = {
    name: "VideoStreaming",
    desc: "Developed a responsive video streaming platform , ensuring a modern and user-friendly interface. Implemented infinite scroll to enhance user experience by dynamically loading content. Utilized debouncing to optimize search functionality, reducing API calls and improving performance and manages the state using Redux. Integrated live chat feature with API polling to enable real-time user interaction.",
    tech: ["React", "Tailwind", "Redux"],
    img: projectImg1,
  };
  const project2 = {
    name: "OTT-Gpt",
    desc: "OTT-GPT is an innovative OTT video platform that revolutionizes content discovery with the integration of GPT (Generative Pre-trained Transformer). This project features a comprehensive library of movies and TV shows, enabling users to stream their favorite content seamlessly. The standout feature is the advanced search functionality powered by GPT, which allows users to find videos using GPT",
    tech: ["React", "Tailwind", "Redux", "Firebase", "OpenAI API"],
    img: projectImg2,
  };
  const project3 = {
    name: "Mini-Paytm",
    desc: "Mini-Paytm is a versatile payment platform designed to streamline financial transactions. This project emulates the core functionalities of Paytm, allowing users to make seamless digital payments, transfer money, and manage their finances efficiently. With a user-friendly interface, Mini-Paytm ensures that transactions are both easy to perform and highly secure.",
    tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    img: projectImg3,
  };

  return (
    <div className=" h-fit  w-full bg-slate-800 flex flex-col items-center pb-28">
      <h1 className="text-[32px] font-bold text-white py-6 text-center">
        My Project
      </h1>
      <ProjectItem {...project1} />
      <ProjectItem {...project2} />
      <ProjectItem {...project3} />
    </div>
  );
};
