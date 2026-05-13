import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import img23 from "../assets/img/image-23.webp";

const navItems = [
  { label: "Home", id: null },
  { label: "Serviços", id: "servicos" },
  { label: "Sobre", id: "quem-somos" },
  { label: "Portfólio", id: "portfolio" },
];

const NAVBAR_HEIGHT = 80;

function smoothScrollTo(id) {
  const targetY = id
    ? (document.getElementById(id)?.getBoundingClientRect().top ?? 0) + window.scrollY - NAVBAR_HEIGHT
    : 0;

  const start = window.scrollY;
  const distance = targetY - start;
  const duration = 600;
  let startTime = null;

  const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
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
