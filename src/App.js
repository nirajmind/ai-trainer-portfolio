import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookDemoModal from "./components/BookDemoModal";

function App() {
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const projectsRef = useRef(null);
  const demoRef = useRef(null);
  const contactRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const scrollTo = (section) => {
    const map = {
      home: homeRef,
      courses: coursesRef,
      projects: projectsRef,
      demo: demoRef,
      contact: contactRef
    };
    const ref = map[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-root">
      <Navbar onNavClick={scrollTo} onBookDemo={() => setShowModal(true)} />
      <div ref={homeRef}>
        <Hero onBookDemo={() => setShowModal(true)} />
      </div>
      <div ref={coursesRef}>
        <Courses />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={demoRef}>
        <Demo />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      {showModal && <BookDemoModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
