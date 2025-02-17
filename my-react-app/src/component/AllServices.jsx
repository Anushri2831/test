import React from "react";
import "./AllServices.css";

const services = [
  { id: 1, name: "Facilities", icon: "🏨" },
  { id: 2, name: "Virtual Key", icon: "🔑" },
  { id: 3, name: "My Room", icon: "🛏" },
  { id: 4, name: "Order Room Service", icon: "🍽" },
];

const AllServices = () => {
  return (
    <div className="all-services">
      <h2>All services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <span className="service-icon">{service.icon}</span>
            <span className="service-name">{service.name}</span>
            <button className="arrow-button">➝</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;