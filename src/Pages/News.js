import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=56114f96ad271c4046d1153e8cc1974a"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response.data);
      });
  }, []);

  const truncateWords = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) {
      return text;
    }
    return words.slice(0, numWords).join(' ') + '...';
  };

  return (
    <div className="news container">
      {news.slice(0,4).map((item) => (
        <Card key={item.url} style={{ width: "18rem", height: "28rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
             <p style={{fontSize:'10'}}>{truncateWords(item.title, 10)}</p>
            </Card.Text>
            <Button variant="primary" style={{color:"white"}}><Link to={`/news/${item.title}`}>Read More....</Link></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default News;
