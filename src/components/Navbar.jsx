import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import img23 from "../assets/img/image-23.png";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link className="logo-nav" to="/" onClick={() => setOpen(false)}>
        <img src={img23} alt="Clinica Logo" />
      </Link>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/Gallery" onClick={() => setOpen(false)}>Serviços</Link>
        <Link to="/Menu" onClick={() => setOpen(false)}>Sobre</Link>
        <Link to="/location" onClick={() => setOpen(false)}>Portfólio</Link>
      </div>

      <Link to="/location" className="visit-btn" onClick={() => setOpen(false)}>
        Contato
      </Link>

      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
