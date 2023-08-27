import "../assets/Css/works.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { BlackReveal } from "../AnimationComponents/BlackReveal";

export default function Works() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>

    <BlackReveal>
    <p className="work-title">Works</p>
    </BlackReveal>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">

      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
