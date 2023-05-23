import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <footer className="contact-me">
      <div className="contact-container">
        <a
          href="https://www.linkedin.com/in/caleb-mcauley-338092270/"
          target="_blank"
        >
          <FontAwesomeIcon
            className="linkedin-icon"
            icon={faLinkedin}
            size="3x"
          />
        </a>

        <a href="https://github.com/Master-Code234" target="_blank">
          <FontAwesomeIcon className="github-icon" icon={faGithub} size="3x" />
        </a>
      </div>
    </footer>
  );
}
