import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectSix, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Portfolio and Projects"
          des="MY PROJECTS"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Sales Forecasting Dashboard"
          des="Tech Stack : Python, Flask, PostgreSQL"
          src={projectOne}
          githubLink="https://github.com/yourusername/sales-forecasting"
          demoLink="https://sales-forecasting-demo.com"
        />
        <ProjectsCard
          title="Image Classification System"
          des="Tech Stack : Python, TensorFlow, Flask API"
          src={projectFive}
          githubLink="https://github.com/yourusername/image-classification"
          demoLink="https://image-classification-demo.com"
        />
        <ProjectsCard
          title="Movie Recommendation System"
          des="Tech Stack : Python, Scikit-learn, SQLite, React.js"
          src={projectThree}
          githubLink="https://github.com/yourusername/movie-recommendation"
          demoLink="https://movie-recommendation-demo.com"
        />
        <ProjectsCard
          title="Facebook Clone"
          des="Tech Stack : React.js, Node, SQL, Socket.io"
          src={projectFour}
          githubLink="https://github.com/yourusername/facebook-clone"
          demoLink="https://facebook-clone-demo.com"
        />
        <ProjectsCard
          title="Password Strength Analyzer"
          des="Tech Stack : HTML, JavaScript, Flask, bcrypt.js"
          src={projectSix}
          githubLink="https://github.com/yourusername/password-strength-analyzer"
          demoLink="https://password-strength-analyzer-demo.com"
        />
        <ProjectsCard
          title="RealTime Chatting App"
          des="Tech Stack : React, Socket.io, Tailwindcss, Node."
          src={projectTwo}
          githubLink="https://github.com/yourusername/realtime-chat"
          demoLink="https://realtime-chat-demo.com"
        />
      </div>
    </section>
  );
};

export default Projects;
