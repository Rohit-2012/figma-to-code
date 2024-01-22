import styles from './WorkCard.module.css'
import { FaArrowRightLong } from "react-icons/fa6";

const WorkCard = ({image, title, description, btnText}) => {
  return (
    <div className={styles.card_container}>
          {image && <img src={image} alt='Dummy Image' />}
          <h2 className={styles.card_title}>{title}</h2>
          <p className={styles.card_description}>{description}</p>
          <span>{ btnText} <FaArrowRightLong /></span>
    </div>
  )
}

export default WorkCard
