import React from "react";
import img1 from "../assets/images/images1.jpg";
import img2 from "../assets/images/images2.jpg";
import img3 from "../assets/images/images3.jpg";
import "../Pages/Portfolio.css";

const projects = [
  {
    title: "E-Commerce Website",
    image: img1,
  },
  {
    title: "Admin Dashboard",
    image: img2,
  },
  {
    title: "AWS Cloud Project",
    image: img3,
  },
  {
    title: "Food Delivery App",
    image: img1,
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">My Projects</h1>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;