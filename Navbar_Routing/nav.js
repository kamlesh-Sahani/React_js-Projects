import React from 'react';
import './nav.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Home from './pages/home';
const Nav = () => {
    return (
        <>
            <Router>
                <nav>
                    <div className="logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="link">
                        <ul>
                            <li>
                                <Link to="/home" className="LinkTag">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="LinkTag">About us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="LinkTag">Contact us</Link>
                            </li>
                            <li>
                                <Link to="/blog" className="LinkTag">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>  
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </Router>
        </>
    );
};

export default Nav;
