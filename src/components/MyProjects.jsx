import './MyProjects.css';
import '../App.css'

export default function MyProjects() {
  return (
    <section id="my-projects">
      <h2 className="h2">My projects</h2>
      <div className="proyectos-container">
        <div className="tarjeta">
          <img src="/images/FCB.png" alt="Proyecto 1" />
          <h3>Field Hockey FCB</h3>
          <p>This website is dedicated to the FC Barcelona Women's Field Hockey Team. Designed to showcase the team's achievements, upcoming events, and important information, the site features an organized and intuitive layout. Users can easily navigate through various sections to learn more about the team’s history, current roster, and latest news. Built with a clean, responsive design, it ensures a great user experience on both desktop and mobile devices.</p>
          <a href="https://hockey-fcb-macarena-de-sarasquetas-projects.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className="website-btn">
            <i className="fas fa-globe"></i> Website
          </a>
          <a href="https://github.com/macudesarasqueta/website-hockey-FCB" target="_blank" rel="noopener noreferrer" className="github-btn">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="tarjeta">
          <img src="/images/to-do.png" alt="Proyecto 2" />
          <h3>To do list</h3>
          <p>This project is a simple yet effective to-do list application built with React. It allows users to create, edit, and delete tasks, helping them stay organized. The app features a clean and user-friendly interface with the ability to mark tasks as completed. With a responsive design, it’s optimized for both desktop and mobile devices. Additionally, it includes persistent data storage, ensuring tasks remain saved even after refreshing the page. The intuitive UX makes task management effortless, making it a great productivity tool for everyday use.</p>
          <a href="https://to-do-list-git-main-macarena-de-sarasquetas-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="website-btn">
            <i className="fas fa-globe"></i> Website
          </a>
          <a href="https://github.com/macudesarasqueta/To-do-list" target="_blank" rel="noopener noreferrer" className="github-btn">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="tarjeta">
          <img src="/images/amate.png" alt="Proyecto 3" />
          <h3>e-commerce</h3>
          <p>It is a modern e-commerce platform designed to offer a seamless shopping experience for customers. The website features a clean and intuitive UI, making it easy for users to browse products, explore categories, and make secure purchases. With a focus on user experience, the store includes detailed product pages, a shopping cart system, and an optimized checkout process to enhance conversions and customer satisfaction.</p>
          <a href="https://amateallover.vercel.app/" target="_blank" rel="noopener noreferrer" className="website-btn">
            <i className="fas fa-globe"></i> Website
          </a>
          <a href="https://github.com/macudesarasqueta/e-commerce" target="_blank" rel="noopener noreferrer" className="github-btn">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      <div id="btn">
        <a href="https://github.com/macudesarasqueta" target="_blank" rel="noopener noreferrer" className="github-btn btn btn-git">
          <i className="fab fa-github"></i> &nbsp;See more projects
        </a>
      </div>
    </section>
  );
}
