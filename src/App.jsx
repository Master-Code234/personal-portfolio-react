// Styles
import "./styles/App.css";

//  Pics
import mypic from "../images/mypic.png";
import pong from "../images/pong.png";
import weatherapp from "../images/weatherapp.png";

// Componets
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header img={mypic} />
      <About img={mypic} />
      <Projects img1={pong} img2={weatherapp} />
      <Contact />
    </div>
  );
}

export default App;
