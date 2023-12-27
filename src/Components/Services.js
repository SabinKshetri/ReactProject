import React from "react";
import { Card } from "react-bootstrap";
import service1Image from "../Assets/image/1.jpg";
import service2Image from "../Assets/image/2.jpg";
import service3Image from "../Assets/image/3.jpg";


const services = [
  {
    title: "Web Development",
    description: "Building modern and responsive web applications.",
    image: service1Image,
  },
  {
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile applications.",
    image: service2Image,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces.",
    image: service3Image,
  },
];

export const Services = () => {
  return (
    <div className="services container">
      <h5>Services</h5>
      <div className="flex">
        {services.map((service, index) => (
          <Card key={index} className="card">
            <Card.Img variant="top" src={service.image} alt={service.title} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
