import "./App.css";
import Header from "./components/Header";
import mypic from "../images/mypic.jpg";
import pong from "../images/pong.png";
import weatherapp from "../images/weatherapp.png";
import About from "./components/About";
import './components/About.css'
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header img={mypic} />

      <Projects
        project1="Pong game"
        img1={pong}
        project2="Weather App"
        img2={weatherapp}
        title="My Projects"
      />

      <About
        title="About Me"
        paragraph=" My journey in web design began during my college years when I first
            discovered the fascinating world of programming using Java Swing and
            python. As I started creating interactive and visually appealing
            Java Swing programs, I realized the immense potential of web
            technologies to create cool looking websites and solve real-world
            problems. Since then, my passion for web design has grown exponentially. I
            have dedicated myself to learning and mastering the latest front-end
            development technologies and techniques. From HTML and CSS to
            JavaScript and modern frameworks like React, I have embraced the
            evolving landscape of web development. When I'm not coding, you can find me exploring new hiking trails,
            playing video games and playing my guitar These interests fuel my
            creativity and provide a good work life balance
            
            
            "
      />

      <Resume title="Resume" />

      <Contact/>
    </div>
  );
}

export default App;
