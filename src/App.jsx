// https://www.youtube.com/watch?v=YQCDUJ6hhNY
import styles from './App.module.css'
import { About } from './components/About/About'
import Contact from './components/Contact/Contact'
import { Hero } from './components/Hero/Hero'
import {Navbar} from './components/Navbar/Navbar'
import Services from './components/Services/Services'
function App() {
 

  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Contact/>
    </div>
  )
}

export default App
