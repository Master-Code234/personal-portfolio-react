import "../styles/Header.css";
import mypic from "/images/mypic.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header">
          Hello my Name is <span className="header-name">Caleb</span>
        </h1>

        <h2 className="header-title">Full Stack Web Developer</h2>
      </div>

      <div className="header-img-container">
        <img
          rel="preload"
          className="header-img"
          src={mypic}
          alt="tech background image"
          width="500"
          height="560"
        />
      </div>
    </header>
  );
}
