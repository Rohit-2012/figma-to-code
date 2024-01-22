import styles from './Logo.module.css'

const Logo = ({image}) => {
  return (
    <div className={styles.logo_container}>
      <img src={image} alt="logo" />
    </div>
  )
}

export default Logo
