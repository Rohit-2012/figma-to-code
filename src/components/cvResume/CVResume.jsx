import styles from "./CVResume.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "../../utils/timeline";

const CVResume = () => {
  let firstIconStyleObj = {
      background: "#7D6AE9",
      border: "2px solid #000"
    };
    let secondIconStyleObj = {
        background: "#FFF",
        border: "2px solid #000"
    }

  return (
    <section className={styles.resume_container}>
      <h3 className={styles.caption}>What my clients think about me</h3>
      <h1 className={styles.heading}>
        My <span className={styles.gradient}>CV Resume</span>
      </h1>
      <section className={styles.timeline_container}>
        <section className={styles.education_timeline}>
          <h3 className={styles.timeline_heading}>Education</h3>
          <section className={styles.timeline}>
            <VerticalTimeline lineColor="#000">
              {timelineData.map((timeline) =>
                timeline.category === "education" ? (
                  <VerticalTimelineElement
                    key={timeline.id}
                    date={timeline.date}
                    dateClassName={timeline.id === 1 ? 'primaryDate' : "secondaryDate"}
                    iconStyle={timeline.id === 1  ? firstIconStyleObj : secondIconStyleObj}
                      >
                          <h3 className={styles.title}>{timeline.title}</h3>
                          <p id="description" className={styles.description}>{ timeline.description}</p>
                  </VerticalTimelineElement>
                ) : (
                  ""
                )
              )}
            </VerticalTimeline>
          </section>
        </section>
        <section className={styles.experience_timeline}>
          <h3 className={styles.timeline_heading}>Experience</h3>
          <section className={styles.timeline}>
            <VerticalTimeline lineColor="#1C1F23">
            {timelineData.map((timeline) =>
                timeline.category === "experience" ? (
                  <VerticalTimelineElement
                    key={timeline.id}
                    date={timeline.date}
                    dateClassName={timeline.id === 3 ? 'primaryDate' : "secondaryDate"}
                    iconStyle={timeline.id ===  3 ? firstIconStyleObj : secondIconStyleObj}
                      >
                          <h3 className={styles.title}>{timeline.title}</h3>
                          <p className={styles.description}>{ timeline.description}</p>
                  </VerticalTimelineElement>
                ) : (
                  ""
                )
              )}
            </VerticalTimeline>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CVResume;
