import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";          // <-- New
import Experience from "./components/Experience";  // <-- New
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-base min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />          {/* <-- New */}
        <Experience />      {/* <-- New */}
        <Contact />
      </main>
    </div>
  );
}

export default App;