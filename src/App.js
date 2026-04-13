
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Navbar from "./components/navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
