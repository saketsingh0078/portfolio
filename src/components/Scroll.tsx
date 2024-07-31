import { useRef } from "react";

const Scroll = () => {
  const sectionRef: any = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Section</button>

      <div style={{ height: "100vh" }}>
        <h1>Scroll Down to see the section</h1>
      </div>

      <div
        ref={sectionRef}
        style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
      >
        <h1>This is the section to scroll to</h1>
      </div>
    </div>
  );
};

export default Scroll;
