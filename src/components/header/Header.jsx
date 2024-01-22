import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header_container}>
      <h1>Kayrenn <span className={styles.purple_linear_gradient}>Smetha</span></h1>
      <nav>
        <ul className={styles.nav_list}>
          <li>Home <i className="fa-solid fa-angle-down"></i></li>
          <li>About Us <i className="fa-solid fa-angle-down"></i></li>
          <li>Service <i className="fa-solid fa-angle-down"></i></li>
          <li>Portfolio <i className="fa-solid fa-angle-down"></i></li>
        </ul>
      </nav>
      <div className={styles.btn_container}>
        <button className={styles.download_btn}>Download CV</button>
        <button className={styles.contact_btn}>Contact</button>
      </div>
    </header>
  )
}

export default Header
