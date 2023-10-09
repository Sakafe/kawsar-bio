import styles from './Hero.module.css';
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Kawsar Ahmed Arafat</h1>
            <p className={styles.description}>
                I am a SEO expert with 5 years of experience. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus officiis consectetur magni enim et eaque?
            </p>
            <a href="#contact" className={styles.contactBtn}>
                   Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"
            className={styles.heroImg} />
         <div className={styles.topBlur} />
         <div className={styles.bottomBlur} />    
    </section>
  )
}
