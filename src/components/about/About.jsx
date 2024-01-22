import styles from './About.module.css'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className={styles.about_container}>
      <section className={styles.left}>
        <div className={styles.image_container}>
        <img src="http://placehold.it/480x560?text=" alt="Dummy Image" />
        </div>
      </section>
      <section className={styles.right}>
        <span className={styles.small_description}>Services I Offer to my Clients</span>
        <h1 className={styles.name}>Kayrenn <span className={styles.gradient}>Smetha</span></h1>
        <p className={styles.summary}>Hello! I’m Kayreen Smetha. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
        <div className={styles.info_container}>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Birthday</h3>
            <span className={styles.info_content}>01-07-1998</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Email</h3>
            <span className={styles.info_content}>mail@address.com</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Age</h3>
            <span className={styles.info_content}>24 Years</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Whatsapp</h3>
            <span className={styles.info_content}>+77 022 123 456</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Address</h3>
            <span className={styles.info_content}>Ave 11, New Yor</span>
          </div>
          <div className={styles.info}>
            <h3 className={styles.info_label}>Freelance</h3>
            <span className={styles.info_content}>Available</span>
          </div>
        </div>
        <button className={styles.learn_btn}>Learn More <FaArrowRight /></button>
      </section>
    </div>
  )
}

export default About
