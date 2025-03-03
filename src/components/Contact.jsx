import './Contact.css'
import '../App.css'

export default function Contact () {
    return (
        <section id="contact">
                <h2 class="h2">Contact</h2>
                <p>You can reach me through the following platforms:</p>
                
                <div class="contact-links">
                    <a href="mailto:macu.desarasqueta@gmail.com" target="_blank">
                        <img src="./images/email.png" alt="Email Icon" class="icon"/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/macarena-de-sarasqueta-szneiderowicz-62a80322b/" target="_blank">
                        <img src="./images/linkedin.png" alt="LinkedIn Icon" class="icon"/>
                    </a>
                    
                    <a href="https://github.com/macudesarasqueta" target="_blank">
                        <img src="./images/github.png" alt="GitHub Icon" class="icon"/>
                    </a>
                </div>
            </section>
    )
}