import WorkCard from '../workCard/WorkCard'
import styles from './Works.module.css'
import { workArray } from '../../utils/workData'

const Works = () => {
    const image = 'http://placehold.it/304x197?text='
    const title = "The Service Provide For The Design Project"
    const description = "I use animation as a third dimension by which to simplify experiences and kuiding"
    const btnText = "Learn More"

  return (
    <section className={styles.works_container}>
      <h3 className={styles.caption}>Visit My portfolio</h3>
          <h1 className={styles.heading}>My <span className={styles.gradient}>Amazing Work</span></h1>
          <div className={styles.work_grid}>
              {workArray.map(work => work.image !== '' ? (<WorkCard image={work.image} title={work.title} description={work.description} btnText={work.btnText} key={work.title}/>) : '')}
              
              <div className={styles.center_works}>
              {workArray.map(work => work.image === '' ? (<WorkCard title={work.title} description={work.description} btnText={work.btnText} key={work.title}/>) : '')}       
              </div>
          <img src="http://placehold.it/370x464?text=" alt="Dummy Image" />
          </div>
    </section>
  )
}

export default Works
