import { useState, useEffect, useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const contactRefs = useRef(null);

  const sectionRefs: any = {
    Home: useRef(null),
    About: useRef(null),
    Experience: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // console.log(`Intersecting: ${entry.target.id}`);
        }
      });
    }, options);

    Object.keys(sectionRefs).forEach((key) => {
      const element = sectionRefs[key].current;
      if (element) {
        observer.observe(element);
        // console.log(`Observing: ${key}`);
      }
    });

    return () => {
      Object.keys(sectionRefs).forEach((key) => {
        const element = sectionRefs[key].current;
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div className="w-screen">
      <Header activeSection={activeSection} sectionRefs={sectionRefs} />
      <div id="Home" ref={sectionRefs.Home} className="w-full">
        <Home contactRefs={contactRefs} />
      </div>
      <div id="About" ref={sectionRefs.About} className="w-full">
        <About />
      </div>
      <div id="Experience" ref={sectionRefs.Experience} className="w-full">
        <Experience />
      </div>
      <div id="Skills" ref={sectionRefs.Skills} className="w-full">
        <Skill />
      </div>
      <div id="Projects" ref={sectionRefs.Projects} className="w-full">
        <Project />
      </div>
      <div id="Contact" ref={sectionRefs.Contact} className="w-ful">
        <Contact contactRefs={contactRefs} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
