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
              Hola! Mi nombre es Gonzalo Asis, soy de Argentina, provincia de Buenos
              Aires. El objetivo de esta web, es
              demostrar de manera simple y sencilla lo que es una, de mis dos
              grandes pasiones, que me acompañan desde pequeño, la tecnología y
              el mundo del automovilismo. En este espacio encontrarás mis
              conocimientos y proyectos creados. Espero lo disfrutes y sea de tu
              agrado.
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
