import "../assets/Css/aboutMe.css";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import carImages from "../carImages";
import TextReveal from "../AnimationComponents/TextReveal";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me">
        <div className="about-me-title__container">
          <BlackReveal>
            <p className="about-me-title">About Me</p>
          </BlackReveal>
        </div>
        <div className="about-me-description_container">
          <BlackReveal>
            <p className="about-me-description">
            Hola! Me llamo Gonzalo Asís tengo 19 años y, soy de Argentina, Provincia de Buenos Aires, bienvenido a mi pagina personal. El objetivo de esta web, es demostrar de manera simple y sencilla, lo que son una de mis dos grandes pasiones, que me acompañan desde chico, la tecnología, y el mundo del automovilismo. En esta web, observaras mis conocimientos en tecnologías webs, y mis otros proyectos creados. Espero que lo disfrutes y sea de tu agrado!
            </p>
          </BlackReveal>
        </div>

        <div className="about-me-img_container">
          <TextReveal>
            <img className="about-me-img" src={carImages.f1} alt="" />
          </TextReveal>
        </div>
      </div>
    </div>
  );
};
