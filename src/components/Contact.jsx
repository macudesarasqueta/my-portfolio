import './Contact.css'
import '../App.css'

export default function Contact () {
    return (
        <section id="contact">
                <h2 className="h2">Contact</h2>
                <p className="parrafo-contact">You can reach me through the following platforms:</p>
                
                <div className="contact-links">
                    <a href="mailto:macu.desarasqueta@gmail.com" target="_blank">
                        <img src="./images/email.png" alt="Email Icon" className="icon"/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/macarena-de-sarasqueta-szneiderowicz-62a80322b/" target="_blank">
                        <img src="./images/linkedin.png" alt="LinkedIn Icon" className="icon"/>
                    </a>
                    
                    <a href="https://github.com/macudesarasqueta" target="_blank">
                        <img src="./images/github.png" alt="GitHub Icon" className="icon"/>
                    </a>
                </div>
            </section>
    )
}