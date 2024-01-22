import styles from './Testimonial.module.css'
import { FaArrowRight } from "react-icons/fa";

const Testimonial = ({name, comments, image}) => {
  return (
    <div className={styles.testimonial_card}>
      <div className={styles.text_container}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.comments}>{ comments}</p>
        <span className={styles.learn_link}>Learn More <FaArrowRight /></span>
      </div>
      <div className={styles.image_container}>
        <img src={image} alt="dummy image" />
      </div>
    </div>
  )
}

export default Testimonial
