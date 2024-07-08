import React, { useState, useEffect, useRef } from "react";
import logo from "../logo.jpeg";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "../links";


const Navbar = () => {

    const [show, setShow] = useState(false);

    //linkContainerRef e linkRef sono due useRef che ci permettono di accedere ai valori di un elemento del DOM
    const linkContainerRef = useRef(null);
    const linkRef = useRef(null);

    //useEffect in questo caso ci permette di calcolare l'altezza della lista dei link e di settare l'altezza del container dei link in base al valore di show
    useEffect(() => {
       const linkListHeight = linkRef.current.getBoundingClientRect().height;
        if(show){
            linkContainerRef.current.style.height = `${linkListHeight}px`;
        }
        else{
            linkContainerRef.current.style.height = '0px';
        }
    }, )

  return ( 
    <nav className="nav">
    <header className="nav-header">
      <div className="nav-brand">
        <img src={logo} alt="logo" className="nav-logo" />
        <h4>NavBar React</h4>
      </div>
      <button className="btn nav-toggler d-lg-none" onClick={() => setShow(!show)}>
        <FaBars className="nav-icon" />
      </button>
    </header>
    <div className={`${show ? "links-container show" : 'links-container'}`} ref={linkContainerRef}>
        <ul className="nav-links" ref={linkRef}>
            {
                links.map((link) => {
                    const { id, url, text } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    );
                })
            }
        </ul>
        
    </div>
    <div className="social-links">
        <SocialBar />
    </div>
  </nav>
  );
};

export default Navbar;