import React from "react";
import "../assets/Css/proyects.css";
import TextReveal from "../AnimationComponents/TextReveal";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faArrowRight, faFilm, faClock, faBookOpen} from "@fortawesome/free-solid-svg-icons";

function Proyects() {
  return (
    <div className="proyects">
      <div className="proyects-title_container">
        <BlackReveal>
          <p className="proyects-title">Proyects</p>
        </BlackReveal>
      </div>

    <TextReveal customDelay={0.3}>
    <div className="proyects-container">
        <div className="proyect-parent">
          <div className="proyect-div1">
            <div className="proyect">
              <div className="proyect-title_container">
                <p className="proyect-title">Weather App</p>
              </div>
              <div className="proyect-description_container">
                <p className="proyect-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  repellat, sapiente distinctio sequi placeat esse quibusdam sed
                  corrupti quidem et veritatis modi. Corrupti nam alias nulla
                  animi modi porro incidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="proyect-div2">
            <div className="proyect-widget_container">
              <span className="proyect-widget-span">
                <FontAwesomeIcon className="proyect-widget" icon={faCloud} />
              </span>
            </div>
          </div>
          <div className="proyect-div3">
            <div className="proyect-technologies_container">
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faReact}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faCss3}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faDatabase}
                />
                <p className="db-name">Weather Api</p>
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} />
              </span>
              <a className="proyect-technologie-span" href="https://weather-app-14iy.vercel.app/" target="_blank">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </TextReveal>

     <TextReveal customDelay={0.3}>
     <div className="proyects-container">
        <div className="proyect-parent-m">
          <div className="proyect-div1-m">
            <div className="proyect">
              <div className="proyect-title_container">
                <p className="proyect-title">Movie Mania</p>
              </div>
              <div className="proyect-description_container">
                <p className="proyect-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  repellat, sapiente distinctio sequi placeat esse quibusdam sed
                  corrupti quidem et veritatis modi. Corrupti nam alias nulla
                  animi modi porro incidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="proyect-div2-m">
            <div className="proyect-widget_container">
              <span className="proyect-widget-span">
                <FontAwesomeIcon className="proyect-widget" icon={faFilm} />
              </span>
            </div>
          </div>
          <div className="proyect-div3-m">
            <div className="proyect-technologies_container">
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faReact}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faCss3}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faDatabase}
                />
                <p className="db-name">TMDB</p>
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} />
              </span>
              <a className="proyect-technologie-span" href="https://movie-mania-six.vercel.app/" target="_blank">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>

     </TextReveal>

      <TextReveal customDelay={0.3}>
      <div className="proyects-container">
        <div className="proyect-parent">
          <div className="proyect-div1">
            <div className="proyect">
              <div className="proyect-title_container">
                <p className="proyect-title">Simple Pomodoro</p>
              </div>
              <div className="proyect-description_container">
                <p className="proyect-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  repellat, sapiente distinctio sequi placeat esse quibusdam sed
                  corrupti quidem et veritatis modi. Corrupti nam alias nulla
                  animi modi porro incidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="proyect-div2">
            <div className="proyect-widget_container">
              <span className="proyect-widget-span">
                <FontAwesomeIcon className="proyect-widget" icon={faClock} />
              </span>
            </div>
          </div>
          <div className="proyect-div3">
            <div className="proyect-technologies_container">
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faReact}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faCss3}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faDatabase}
                />
                <p className="db-name">Weather Api</p>
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} />
              </span>
              <a className="proyect-technologie-span" href="https://pomodoro-app-woad-eight.vercel.app/" target="_blank">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </TextReveal>

     <TextReveal customDelay={0.3}>
     <div className="proyects-container">
        <div className="proyect-parent-m">
          <div className="proyect-div1-m">
            <div className="proyect">
              <div className="proyect-title_container">
                <p className="proyect-title">Notes App</p>
              </div>
              <div className="proyect-description_container">
                <p className="proyect-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  repellat, sapiente distinctio sequi placeat esse quibusdam sed
                  corrupti quidem et veritatis modi. Corrupti nam alias nulla
                  animi modi porro incidunt.
                </p>
              </div>
            </div>
          </div>
          <div className="proyect-div2-m">
            <div className="proyect-widget_container">
              <span className="proyect-widget-span">
                <FontAwesomeIcon className="proyect-widget" icon={faBookOpen} />
              </span>
            </div>
          </div>
          <div className="proyect-div3-m">
            <div className="proyect-technologies_container">
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faReact}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faCss3}
                />
              </span>
              <span className="proyect-technologie-span">
                <FontAwesomeIcon
                  className="proyect-technologie-widget"
                  icon={faDatabase}
                />
                <p className="db-name">TMDB</p>
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} />
              </span>
              <a className="proyect-technologie-span" href="https://movie-mania-six.vercel.app/" target="_blank">
                <FontAwesomeIcon className="proyect-technologie-widget" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
     </TextReveal>
    </div>
  );
}

export default Proyects;
