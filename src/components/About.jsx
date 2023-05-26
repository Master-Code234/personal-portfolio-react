import "../styles/About.css";
import mypic from "../../images/mypic.png";

export default function About() {
  return (
    <div className="about">
        <h2 className="aboutme-title">About me</h2>


      <div className="aboutme-container">

        
        <img className="aboutme-img" src={mypic} width="500" height="560" />

        <p>
          My journey in web design began during my college years when I first
          discovered the fascinating world of programming using Java Swing and
          python. As I started creating interactive and visually appealing Java
          Swing programs, I realized the immense potential of web technologies
          to create cool looking websites and solve real-world problems. Since
          then, my passion for web design has grown exponentially. I have
          dedicated myself to learning and mastering the latest front-end
          development technologies and techniques. From HTML and CSS to
          JavaScript and modern frameworks like React, I have embraced the
          evolving landscape of web development. When I'm not coding, you can
          find me exploring new hiking trails, playing video games and playing
          my guitar These interests fuel my creativity and provide a good work
          life balance
        </p>
      </div>
    </div>
  );
}
