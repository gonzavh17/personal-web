import React from "react";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import Proyects from "./Proyects";
import  Skills  from "./Skills";
import NavBar from "./NavBar";
import Cursor from "./Cursor";
import { ContactUs } from "./Contact";
import Footer from './Footer'

const LandPage = () => {
  return (
    <div>
      <NavBar />
      <Cursor />
      <Home />
      <AboutMe />
      <Skills/>
      <Proyects/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default LandPage;
