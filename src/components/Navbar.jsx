import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

import logo from "../assets/img/LogoClinica.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isPaginaX = location.pathname === "/location";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar 
        ${isScrolled ? "scrolled" : ""} 
        ${isPaginaX ? "navbar-location" : ""}
      `}
    >
      <Link className="logo-nav" to="/">
        <img className="logo" src={logo} alt="SNACK Logo" />
      </Link>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        {/*<Link to="/Gallery" onClick={() => setOpen(false)}>Clínica</Link>*/}
        <Link to="/Menu" onClick={() => setOpen(false)}>Tratamentos</Link>
        <Link to="/location" onClick={() => setOpen(false)}>Localização</Link>
      </div>

      <Link to="/location" className="visit-btn">
        <p>Nos Visite</p>
      </Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
