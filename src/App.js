import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ExperienceEducation from "./components/ExperienceEducation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
    </div>
  );
}

export default App;
