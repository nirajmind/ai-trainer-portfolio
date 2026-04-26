import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookDemoModal from "./components/BookDemoModal";
import Services from "./components/Services";
import Instructors from "./components/Instructors";
import LeadInstructor from "./components/LeadInstructor";

function App() {
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const projectsRef = useRef(null);
  const demoRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const instructorsRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  // FIX: define openModal
  const openModal = () => setShowModal(true);

  const scrollTo = (section) => {
    const map = {
      home: homeRef,
      services: servicesRef,
      instructors: instructorsRef,
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
      <Navbar onNavClick={scrollTo} onBookDemo={openModal} />

      <div ref={homeRef}>
        <Hero onBookDemo={openModal} />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <LeadInstructor />

      <div ref={instructorsRef}>
        <Instructors />
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

console.log("App.js loaded");
