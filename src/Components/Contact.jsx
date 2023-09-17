import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/Css/contact.css";
import carImages from "../carImages";
import { BlackReveal } from "../AnimationComponents/BlackReveal";
import TextReveal from "../AnimationComponents/TextReveal";
import {Toaster, toast } from 'react-hot-toast'

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const {name, value}= e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      const nameInput = form.current.querySelector(".name-input");
      const emailInput = form.current.querySelector(".email-input");
      const textArea = form.current.querySelector(".text-area");

      // Realiza la validación aquí
      if (!nameInput.value || !emailInput.value || !textArea.value) {
        toast.error("Porfavor complete el formulario")
        return;
      }

      emailjs
          .sendForm(
            "service_qg9zjgq",
            "template_hgbvajp",
            form.current,
            "gSO3rs0Mlcuit9c03"
          )
          .then(
            (result) => {
              toast.success('Formulario enviado correctamente!')

            },
            (error) => {
              toast.error("El formulario no pudo enviarse")
            }
          );
    }

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title_container">
        <BlackReveal>
          <p className="contact-title">Contact</p>
        </BlackReveal>
      </div>

      <div className="contact-parent">
        <TextReveal customDelay={0.5}>
          <div className="contact-div1">
            <img src={carImages.porsche5} className="contact-img" />
            <p className="contact-description">
              Espero que hayas disfrutado de esta web, tanto como yo disfrute de
              crearla, si deseas más información o ponerte en contacto conmigo,
              simplemente completa el formulario a continuación y tu mensaje
              llegará directamente a mi bandeja de entrada.
            </p>
          </div>
        </TextReveal>
        <TextReveal customDelay={0.5}>
          <div className="contact-div2">
            <form ref={form} onSubmit={sendEmail} className="form">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="user_name"
                className="name-input"
                placeholder="Insert your name"
                value={formData.user_name}
                onChange={handleInputChange}
              />
              <label className="form-input" placeholder="Insert your email">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="email-input"
                placeholder="Insert your name"
                value={formData.user_email}
                onChange={handleInputChange}
              />
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="text-area"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <div className="btn-send_container">
                <input type="submit" value="Send" className="send-btn" />
              </div>
            </form>
          </div>
        </TextReveal>
      </div>
      <Toaster/>
    </div>
  );
};
