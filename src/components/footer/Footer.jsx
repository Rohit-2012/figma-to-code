import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className={styles.text_content}>
        <section className={styles.footer_aboutUs}>
          <h3 className={styles.footer_headings}>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Neque diam nulla fusce
            hendrerit nec lorem dolor.
          </p>
        </section>
        <section className={styles.footer_programs}>
          <h3 className={styles.footer_headings}>PROGRAMS</h3>
          <ul>
            <li>+ Buy A Property</li>
            <li>+ Calculate your Property</li>
            <li>+ Rent a Property</li>
            <li>+ Our Terms and Conditions</li>
          </ul>
        </section>
        <section className={styles.footer_support}>
          <h3 className={styles.footer_headings}>SUPPORT</h3>
          <ul>
            <li>About us</li>
            <li>Term & Conditions</li>
            <li>Forums</li>
            <li>Become a Teacher</li>
          </ul>
        </section>
        <section className={styles.footer_contactUs}>
          <h3 className={styles.footer_headings}>CONTACT US</h3>
          <ul>
            <li>
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <span>321 queenberry street, Embilipitiya 70200 Sri Lanka.</span>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume"></i>
              <span>+94 71 123 4567</span>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <span>Support@brizmi.com</span>
            </li>
          </ul>
        </section>
      </section>
      <section className={styles.link_icons}>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaWhatsapp />
        <FaYoutube />
      </section>
    </footer>
  );
};

export default Footer;
