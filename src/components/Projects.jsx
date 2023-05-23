import "../styles/Projects.css";

export default function Projects({ img1, img2 }) {
  return (
    <div className="project">
      <h2 className="project-title">Projects</h2>

      <div className="project-container">
        <div className="project1">
          <h2 className="project1-title">Pong Game</h2>
          <a href="https://github.com/Master-Code234/pong-game" target="_blank">
            <img src={img1} alt="Pong game image" width="500" height="500" />
          </a>
        </div>

        <div className="project2">
          <h2 className="project2-title">Weather App</h2>
          <a
            href="https://github.com/Master-Code234/simple-weather-app"
            target="_blank"
          >
            <img src={img2} alt="Weather app image" width="500" height="500" />
          </a>
        </div>
      </div>
    </div>
  );
}
