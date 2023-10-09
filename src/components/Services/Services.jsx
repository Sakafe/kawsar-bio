import styles from './Services.module.css'
import {service} from "../../data/service"
const Services = () => {
    return (
        <section className={styles.containers} id='services'>
            <h2 className={styles.title}>SERVICES</h2>
             <div className={styles.services}>
             {
             service.map((project, id) => 
               <div className={styles.box} key={id}>
                   <img src={project.image} alt="" />
                   <h3>{project.title}</h3>
                   <p>{project.description}</p>
                   <a href={project.demo}>Demo</a>
               </div>

             )}
             </div>
        </section>
    );
};

export default Services;