import styles from './Contact.module.css';
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
// import { getImageUrl } from '../../utils'
const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.footer}>
      <div className={styles.left}>
                 <div className={styles.info}>
                     <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                     <div>
                        <p>Chasara</p>
                        <p>Narayanganj-1400</p>
                        <p>Bangladesh</p>
                     </div>
                 </div>
                 <div className={styles.info}>
                  <h4>
                  <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                  +8801......789
                  </h4>
                 </div>
                    <div className={styles.info}>
                    <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <h4>
                    ahmedsakafe@gmail.com
                    </h4>
                    </div>
               </div>
               <div className={styles.right}>
                  <h4>About the Compani</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos delectus, ipsam quod amet sapiente, quaerat recusandae laudantium ad cum impedit nemo repellat unde consequuntur blanditiis error quae fugiat odit aliquid?</p>
                  <div className={styles.social}>
                  <a href=""><FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/></a>
                  <a href=""><FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/></a>
                  <a href=""><FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}}/></a>
                  </div>
               </div>
      </div>
    </footer>
    );
};

export default Contact;