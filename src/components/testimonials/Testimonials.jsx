import styles from "./Testimonials.module.css";
import Slider from "react-slick";
import { testimonials } from "../../utils/testimonials";
import Testimonial from "./Testimonial";
import { Fragment } from "react";

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
  };

  return (
    <section className={styles.testimonials_container}>
      <h3 className={styles.caption}>What my clients think about me</h3>
      <h1 className={styles.heading}>
        What My <span className={styles.gradient}>Clients Says</span>
      </h1>

      <div className={styles.slider_container}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Fragment key={testimonial.id}>
              <Testimonial
                name={testimonial.name}
                comments={testimonial.comments}
                image={testimonial.image}
              />
            </Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
