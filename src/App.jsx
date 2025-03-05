import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MyProjects from './components/MyProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cv from './components/Cv';
import AboutMe from './components/AboutMe';

export default function App() {

  return (
    <div>
      <Navbar />
      <div className="parrafo">
        <Profile />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Cv />
        <Contact />
      </div>
    </div>

  )
}