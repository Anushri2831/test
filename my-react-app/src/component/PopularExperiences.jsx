import React from "react";
import "./PopularExperiences.css";

const experiences = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/OIP.xAPT4zHMj_mUmhhmJt5y2wAAAA?rs=1&pid=ImgDetMain",
    title: "Bike Riding",
    description: "Varied tour options",
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.I4ulOhlvfpUWS672ChKYtgHaE7?rs=1&pid=ImgDetMain",
    title: "Dinner at the Table",
    description: "From $30/person",
  },
];

const PopularExperiences = () => {
  return (
    <div className="popular-experiences">
      <h2>Popular experiences</h2>
      <div className="experiences-list" >
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <img src={exp.image} alt={exp.title} className="experience-img" />
            <div className="experience-details">
              <h3 >{exp.title}</h3>
              <p >{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularExperiences;