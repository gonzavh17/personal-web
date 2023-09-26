import "../assets/Css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-container">
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://github.com/gonzavh17"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p className="footer-icon-description">Follow Me</p>
        </span>
        <span className="footer-icon">
          <a className="icon-link" href="#contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className="footer-icon-description">Email Me</p>
        </span>
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/devgonzaloasis"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p className="footer-icon-description">Contact Me</p>
        </span>
        <span className="footer-icon">
          <a
            className="icon-link"
            href="https://drive.google.com/file/d/1PbuFlY6dln2zGiJsidXfZtHUtDDmYF30/view?usp=sharing"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <p className="footer-icon-description">Downlaod my CV</p>
        </span>
      </div>

      <div className="footer-dedication">
        <p className="rights">All rights Reserved</p>
        <p className="made-by">
          Made with <FontAwesomeIcon icon={faHeart} /> by Gonza{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
