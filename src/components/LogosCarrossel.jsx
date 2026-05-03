import "../styles/LogosCarrossel.css";
import logo from "../assets/img/image-23.png";
import logo1 from "../assets/img/snack-logo.png";
import logo2 from "../assets/img/LogoClinica.png";
import logo3 from "../assets/img/otica-logo.png";
import logo4 from "../assets/img/evva_logo_preto.png";

const logos = [
  { id: 1, src: logo1, className: "logo-snack", link: "https://www.instagram.com/snackburguer_apui" },
  { id: 2, src: logo2, className: "logo-clinica", link: "https://drbrunoalex-dev.netlify.app" },
  { id: 3, src: logo3, className: "logo-otica", link: "https://wa.me/5521978867492" },
  { id: 4, src: logo4, className: "logo-evva", link: "https://www.instagram.com/evva_dor" },
  { id: 5, src: logo1, className: "logo-snack", link: "https://www.instagram.com/snackburguer_apui" },
  { id: 6, src: logo2, className: "logo-clinica", link: "https://drbrunoalex-dev.netlify.app" },
  { id: 7, src: logo3, className: "logo-otica", link: "https://wa.me/5521978867492" },
  { id: 8, src: logo4, className: "logo-evva", link: "https://www.instagram.com/evva_dor" },
];

export default function LogosCarrossel() {
  return (
    <div className="logos-carrossel">
      <div className="logos-track">
        {[...logos, ...logos].map((l, i) => (
          <a
            key={i}
            href={l.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`logos-item ${l.className}`}
          >
            <img src={l.src} alt={`Cliente ${l.id}`} />
          </a>
        ))}
      </div>
    </div>
  );
}