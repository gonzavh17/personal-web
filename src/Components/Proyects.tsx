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
  faBootstrap,
  faJs,
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
                ¿Alguna vez te has preguntado qué tiempo hace afuera antes de salir de casa o planificar un viaje? Con la Weather App, obtendrás respuestas precisas y al instante. Esta aplicación simplifica el proceso de obtener información sobre el clima en cualquier parte del mundo. Solo tienes que ingresar el nombre de tu ciudad y ¡listo!
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
                <a href="https://github.com/gonzavh17/weather-app" className="icon-link" target="_blank"><FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} /></a>
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
                Si eres un amante del cine y siempre estás buscando las últimas novedades cinematográficas, MovieMania es tu mejor aliado. Esta plataforma te ofrece acceso instantáneo a información completa sobre las películas más recientes, incluyendo fechas de estreno, presupuesto, puntuaciones de críticos y audiencia, y mucho más. ¡Explora el emocionante mundo del cine como nunca antes!
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
                  icon={faBootstrap}
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
            <a href="https://github.com/gonzavh17/MovieMania" className="icon-link" target="_blank"><FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} /></a>
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
                A veces, la simplicidad es la clave para una mayor productividad. Con Simple Pomodoro, es una herramienta de gestión del tiempo que elimina distracciones y te ayuda a concentrarte en lo que realmente importa: tus tareas. Este es el Pomodoro en su forma más pura: un temporizador. ¡Pero no subestimes su simplicidad, ya que puede cambiar la forma en que trabajas!
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
                  icon={faJs}
                />
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
            <a href="https://github.com/gonzavh17/pomodoro-app" className="icon-link" target="_blank"><FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} /></a>
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
                <p className="proyect-title">NoteKeep</p>
              </div>
              <div className="proyect-description_container">
                <p className="proyect-description">
                A veces, las ideas brillantes o los pensamientos importantes aparecen en el momento menos esperado. NoteKeep es tu compañero confiable para capturar esas ideas y mantener tus pensamientos organizados. Esta aplicación simple pero efectiva te permite tomar notas y almacenarlas de manera conveniente para que nunca vuelvas a perder una idea valiosa.
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
                <p className="db-name">Firestore</p>
              </span>
            </div>
            <div className="proyect-technologies_container">
            <span className="proyect-technologie-span">
            <a href="https://github.com/gonzavh17/notes-app" className="icon-link" target="_blank"><FontAwesomeIcon className="proyect-technologie-widget" icon={faGithub} /></a>
              </span>
              <a className="proyect-technologie-span" href="https://notes-app-gamma-brown.vercel.app/" target="_blank">
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
