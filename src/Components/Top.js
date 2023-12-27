import React,{ useState, useEffect } from "react";
import moment from 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';

const Top = () => {
   const [currentTime, setCurrentTime] = useState(moment().tz('Asia/Kathmandu').format('YYYY-MM-DD h:mm:ss A'));
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentTime(moment().tz('Asia/Kathmandu').format('YYYY-MM-DD h:mm:ss A'));
          }, 1000);
      
          // Cleanup the interval on component unmount
          return () => clearInterval(intervalId);
        }, []);

  return (
    <>
    <div className="top">
      <div className="container">
        <div className="top_nav">
            <div className="left">{currentTime}</div>
            <div className="right">
                <ul>
                    <li><a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.twitter.com/"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                    
                </ul>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Top;
