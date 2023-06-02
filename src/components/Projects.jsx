import "../styles/Projects.css";
import pong from "../../images/pong.png";
import weatherapp from "../../images/weatherapp.png";
import blogPost from "../../images/blogPost.png"

export default function Projects() {
  return (
    <div className="project">
     
        <h2 className="project-title">Projects</h2>
    
      <div className="project-container">
        <div className="pong-game">
          <h2>Pong Game</h2>
          <a href="https://github.com/Master-Code234/pong-game" target="_blank">
            <img
              className="pong-game-img"
              src={pong}
              alt="Pong game image"
              width="500"
              height="500"
            />
          </a>
        </div>

        <div className="weather-app">
          <h2>Weather App</h2>
          <a
            href="https://github.com/Master-Code234/simple-weather-app"
            target="_blank"
          >
            <img
              className="weather-app-img"
              src={weatherapp}
              alt="Weather app image"
              width="500"
              height="500"
            />
          </a>
        </div>

        <div className="blog-post">
          <h2>Blog Post Website</h2>

          <a href="https://github.com/Master-Code234/blog-post-frontend" target="_blank">
            <img src={blogPost} alt="blog post website" width="500" height="500" />
          </a>
        </div>
      </div>
    </div>
  );
}
