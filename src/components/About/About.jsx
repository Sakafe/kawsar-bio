import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl('about/aboutImage2.png')} alt="My info"
          className={styles.aboutImage}/>
          <ul className={styles.aboutItems}>
            <li  className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="cursor" className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <h3>PROFESSIONAL PILOT</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="cursor" className={styles.aboutIcon} />
                <div className={styles.aboutItemText}>
                   <h3>SEO EXPERT</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui adipisci voluptates aliquam. Recusandae, libero?</p>
                </div>
            </li>
          </ul>
        </div>
    </section>
  )
}
