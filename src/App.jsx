import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {

  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
      <Profile/>
      <section className='parrafo'>
        <AboutMe/>
        <MyProjects/>
        <Skills/>
        <div id="cv">
            <h2 class="h2"  style={{ paddingTop: "105px"}}>CV</h2>
            <a href="/en. de sarasqueta.cv.pdf" class="btn" download="CV.deSarasqueta-Macarena.pdf">Download CV</a>
        </div>
        <Contact/>
      </section>
    </div>
  )
}