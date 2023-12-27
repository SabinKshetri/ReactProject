import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../Assets/image/1.jpg";
import Banner2 from "../Assets/image/4.png";
import Banner3 from "../Assets/image/5.png";


export const Banner = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5>Talk is Cheap. Show me the Source Code!! </h5>
            <p>Talk is Cheap. Show me the Source Code!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5>Talk is Cheap. Show me the Source Code!! </h5>
            <p>Talk is Cheap. Show me the Source Code!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Banner3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h5>Talk is Cheap. Show me the Source Code!! </h5>
            <p>Talk is Cheap. Show me the Source Code!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
