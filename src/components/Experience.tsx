import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const experienceHclDetails = {
    company: "Hcl - Software Developer",
    duration: "Sep 2022 - present",
    responsibilities: [
      "Developed and maintained a dynamic Internal Project (Employee Engagement and Management Platform) providing a self-service portal to streamline employee engagement and management processes within the company utilizing modern web technologies such as HTML, CSS, JavaScript, and React.js to create responsive and user-friendly interfaces.",
      "Transformed UI/UX wireframes into functional code, ensuring a seamless transition from design to implementation.",
      "Migrated multi page user experience into single page application, improving user engagement by 30 %",
    ],
  };

  const experienceInternshipDetails = {
    company: "Geminid System Inc.- Software Developer Intern",
    duration: "July 2022 - Aug 2022",
    responsibilities: [
      "Developed a nodejs software that help to generate new Service Now ticket using the Service Now API.",
      "Worked in Improving Frontend part of the website, optimising the pages and user experiences.",
    ],
  };

  const experienceOpenSourceDetails = {
    company: "Cal.com - Open Source Contributor",
    duration: "June 2024 - Present",
    responsibilities: [
      "Fix: The edit button on the availability page now works perfectly on small screens. This resolves the issue where the edit icon was visible but didn't initiate the edit functionality.",
    ],
  };

  return (
    <div className="h-[120vh] bg-gray-800">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[2.2vw] text-white my-5">Experience</h1>
        <ExperienceItem {...experienceHclDetails} />
        <div className="border-2 h-14 border-gray-400"></div>
        <ExperienceItem {...experienceInternshipDetails} />
        <div className="border-2 h-14 border-gray-400"></div>
        <ExperienceItem {...experienceOpenSourceDetails} />
      </div>
    </div>
  );
};
