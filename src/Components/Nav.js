import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import News from "../Pages/News"
import Single from "../Pages/Single"

export const Nav = () => {
  return (
    <>
   
    <div className="nav">
      <div className="container">
        <div className="menu">
          <div className="left">LOGO</div>
          <div className="middle">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <button >Inquery</button>
          </div>
        </div>
      </div>
    </div>

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/news/:id" element={<Single/>}></Route>
    </Routes>
    </>
  );
};
