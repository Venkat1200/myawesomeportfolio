// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Education from "./components/Education";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Education />
//       <Contact />
//     </div>
//   );
// }

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="animate-fade-in">
        <Home />
      </div>
      <div className="animate-fade-in">
        <About />
      </div>
      <div className="animate-fade-in">
        <Skills />
      </div>
      <div className="animate-fade-in">
        <Projects />
      </div>
      <div className="animate-fade-in">
        <Education />
      </div>
      <div className="animate-fade-in">
        <Contact />
      </div>
    </div>
  );
}

export default App;
