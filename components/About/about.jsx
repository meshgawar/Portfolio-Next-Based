import Image from "next/image";
import "./about.css";
import Info from "./info";

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section__title">About Me</h2>
      <span className="section__subtitle">Introduction</span>

      <div className="about__container container grid">
        <Image
          src="/mesh-gawar-profile.jpg"
          alt="Mesh Gawar - Full Stack MERN Stack and Next.js Developer"
          width={320}
          height={320}
          priority
          className="about__img"
        />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a Full Stack Web Developer specializing in the MERN Stack and Next.js,
            focused on building fast, scalable, and user-friendly web applications.
            I enjoy transforming complex problems into simple, elegant solutions
            and continuously learning modern technologies.
          </p>

          <a
            href="/mesh-gawar-resume.pdf"
            download
            className="button button--flex"
            aria-label="Download Mesh Gawar Resume"
          >
            Download Resume
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M12 16L7 11h3V4h4v7h3l-5 5z" fill="currentColor"/>
              <path d="M5 20h14v-2H5v2z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
