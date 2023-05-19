export default function Projects({ project1, img1, project2, img2, title }) {
  return (
    <div className="project-head">
      <h1 className="project-title">{title}</h1>

      <div className="project-container">
        <div className="project1">
          <h2 className="project1-title">{project1}</h2>
          <a href="https://github.com/Master-Code234/pong-game" target="blank">
            <img src={img1} alt="Pong game image"  width="500" height="500" />
          </a>
        </div>

        <div className="project2">
          <h2 className="project2-title">{project2}</h2>
          <a href="https://github.com/Master-Code234/simple-weather-app" target="blank">
          <img src={img2} alt="Weather app image"  width="500" height="500" />
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}
