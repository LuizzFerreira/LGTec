import { useState } from "react";
import "../styles/Social.css";
import InstaLogo from "../assets/img/logo-insta2.webp";
import WpLogo from "../assets/img/icone-do-whatsapp.webp";
import TlLogo from "../assets/img/telefone-icon.webp";
import LgLogo from "../assets/img/icone-licacao.webp";

export default function Social() {
  const [active, setActive] = useState(false);

  return (
    <div 
      className={`social-container ${active ? "active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="social-options">
        <a href="https://wa.me/5521999329346" className="social-item whatsapp" target="_blank" rel="noreferrer">
            <img className="WpLogo" src={WpLogo} alt="Logo" />
        </a>
        <a href="https://www.instagram.com/lgtec.oficial" className="social-item instagram" target="_blank" rel="noreferrer">
          <img className="InstaLogo" src={InstaLogo} alt="Logo" />
        </a>
        <a href="tel:+5521999329346" className="social-item phone">
          <img className="TlLogo" src={TlLogo} alt="Logo" />
        </a>
      </div>
      
      <button className="social-main-btn">
        <img className="LgLogo" src={LgLogo} alt="Logo" />
      </button>
    </div>
  );
}