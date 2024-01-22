import { Fragment } from "react";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import { servicesArray } from "../../utils/servicesData";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
  };

  return (
    <section className={styles.services}>
      <h3 className={styles.caption}>Services I Offer to my Clients</h3>
      <h1 className={styles.heading}>
        My Best <span className={styles.gradient}>Service</span>
      </h1>
      <div className={styles.slider_container}>
        <Slider {...settings}>
          {servicesArray.map((service, index) => (
            <Fragment key={`${service.tittle} ${index}`}>
              <ServiceCard
                tag={service.tag}
                tittle={service.tittle}
                description={service.description}
              />
            </Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
