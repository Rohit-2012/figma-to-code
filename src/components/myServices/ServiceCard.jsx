import styles from './ServiceCard.module.css'
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({tag, tittle, description}) => {
  return (
    <div className={styles.card_container}>
      <h3 className={styles.tag}>{tag}</h3>
      <h1 className={styles.title}>{tittle}</h1>
          <p className={styles.description}>{description}</p>
          <span className={styles.pricing_btn}>See Pricing <FaArrowRight /></span>
    </div>
  )
}

export default ServiceCard
