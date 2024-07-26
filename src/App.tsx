import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
