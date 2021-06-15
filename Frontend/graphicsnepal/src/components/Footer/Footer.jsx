import React from 'react'
import {NavLink} from "react-router-dom"
import './Footer.css'
import img from "../Group.png"
 

function Footer() {



    return (
        <footer>

            <div className="footer_top">

                <section className="demanded">
                    <h3>Demanded Talents</h3>
                    <ul>
                        <li><NavLink to="/">Photographers</NavLink></li>
                        <li><NavLink to="/">Logo designers</NavLink></li>
                        <li><NavLink to="/">UI/UX designers</NavLink></li>
                    </ul>

                </section>

                <section className="common_links">

                <h3>Common Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Blog</NavLink></li>
                        <li><NavLink to="/">Find Talent</NavLink></li>
                    </ul>

                </section>

                <section className="company">

                <h3>Company</h3>
                    <ul>
                        <li><NavLink to="/">About Us</NavLink></li>
                        <li><NavLink to="/">Careers</NavLink></li>
                        <li><NavLink to="/">Why Us?</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                    </ul>

                </section>

                <section className="social_links">
                <h3>Social Links</h3>

                <NavLink to="/"> <i className="fab fa-facebook-f"></i></NavLink>
                <NavLink to="/"> <i className="fab fa-twitter"></i></NavLink>
                <NavLink to="/"> <i className="fab fa-youtube"></i></NavLink>
                <NavLink to="/"><i className="fab fa-instagram"></i></NavLink>
               
                </section>

            </div>

            <div className="footer_bottom">
                <div className="left">
                  
                    <section className="btm_logo">
                        <img src={img} alt="logo graphics nepal" />
                        <h2>graphicsnepal</h2>
                    </section>

                    <span></span>

                    <p>Platform for Nepali Talents</p>

                </div>

                <div className="right">
                 Copyright&#169;2021-graphicsnepal
                </div>
            </div>



            
        </footer>
    )
}

export default Footer
