import './Skills.css'
import '../App.css'

export default function Skills () {
    return (
        <section id="skills">
                <h2 className="h2">Skills</h2>
                <div className="skills">
                    <span className="skill-icon"><i class="fab fa-html5"></i> HTML</span>
                    <span className="skill-icon"><i class="fab fa-css3-alt"></i> CSS</span>
                    <span className="skill-icon"><i class="fab fa-js"></i> JavaScript</span>
                    <span className="skill-icon"><i class="fab fa-react"></i> React</span>
                    <span className="skill-icon"><i class="fab fa-node"></i> Node.js</span>
                    <span className="skill-icon"><i class="fab fa-git"></i> Git</span>
                    <span className="skill-icon"><i class="fab fa-github"></i> GitHub</span>
                </div> 
        </section>
    )
}