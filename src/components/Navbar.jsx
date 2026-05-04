import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import img23 from "../assets/img/image-23.webp";

const navItems = [
  { label: "Home", id: null },
  { label: "Serviços", id: "servicos" },
  { label: "Sobre", id: "sobre" },
  { label: "Portfólio", id: "portfolio" },
];

const NAVBAR_HEIGHT = 80;

function smoothScrollTo(id) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => smoothScrollTo(id), 300);
    } else {
      smoothScrollTo(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button className="logo-nav" onClick={() => handleNav(null)}>
        <img src={img23} alt="LGTec Logo" />
      </button>

      <div className={`links ${open ? "active" : ""}`}>
        {navItems.map((item) => (
          <button key={item.label} onClick={() => handleNav(item.id)}>
            {item.label}
          </button>
        ))}
      </div>

      <button className="visit-btn" onClick={() => handleNav("contato")}>
        Contato
      </button>

      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
