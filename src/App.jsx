// Styles
import "./styles/App.css";

// Componets
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header  />
      <About  />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
