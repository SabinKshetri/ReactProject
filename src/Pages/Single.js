import React, { useState, useEffect,useParams } from 'react';
import axios from 'axios';

const Single = () => {
  const { title } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=56114f96ad271c4046d1153e8cc1974a");
        const newsArray = response.data.articles;

        
        const index = newsArray.findIndex((item) => item.title === title);

       
        if (index !== -1) {
          setNews(newsArray[index]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [title]);

  if (!news) {
    return <div className='container'>Loading...</div>;
  }

  return (
    <div className='container'>
      <h4>{news.title}</h4>
      <h6>{news.description}</h6>
      <p>{news.publishedAt}</p>
     
    </div>
  );
};

export default Single;
