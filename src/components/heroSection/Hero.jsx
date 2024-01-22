import styles from "./Hero.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { logoData } from "../../utils/companyLogos";
import Logo from "../logoIcons/Logo";
import { Fragment } from "react";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <section className={styles.left}>
        <span className={styles.name}>Hi, I'm Kayrenn Smetha</span>
        <h1 className={styles.profession}>
          I’m <span className={styles.gradient}>Proffesional</span> Expert
          Developer.
        </h1>
        <p className={styles.summary}>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className={styles.btn_container}>
          <button className={styles.portfolio}>
            My Portfolio <FaArrowRight />
          </button>
          <button className={styles.download}>Download CV</button>
        </div>
        <div className={styles.link_container}>
          <section className={styles.social}>
            <h3>Find With Me</h3>
            <div className={styles.icon_container}>
              {logoData.map((logo, index) => (logo.category === "social" ? <Fragment key={index}><Logo image={logo.logo} /></Fragment> : ''))}
            </div>
          </section>
          <section className={styles.developer}>
            <h3>Best Skills On</h3>
            <div className={styles.icon_container}>
            {logoData.map((logo, index) => (logo.category === "work" ? <Fragment key={index}><Logo image={logo.logo} /></Fragment> : ''))}
            </div>
          </section>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.image_container}>
          <img src="http://placehold.it/570x570?text=" alt="Dummy Image" />
              </div>
              <div className={`${styles.rectangular_badge} ${styles.top_left}`}>
                  <h2>12+</h2>
                  <p>Years Of Experience</p>
              </div>
              <div className={`${styles.rectangular_badge} ${styles.middle_right}`}>
                  <h2>330</h2>
                  <p>Completed Projects</p>
              </div>
              <div className={styles.circular_badge}>
                  <h3>Expert Developer</h3>
              </div>
      </section>
    </div>
  );
};

export default Hero;
