import "../styles/LogosCarrossel.css";
import logo1 from "../assets/img/snack-logo.webp";
import logo2 from "../assets/img/LogoClinica.webp";
import logo3 from "../assets/img/otica-logo.webp";
import logo4 from "../assets/img/evva_logo_preto.webp";

const logos = [
  { id: 1, src: logo1, className: "logo-snack", link: "https://snack-8q3.pages.dev" },
  { id: 2, src: logo2, className: "logo-clinica", link: "https://drbrunoalex-dev.netlify.app" },
  { id: 3, src: logo3, className: "logo-otica", link: "https://wa.me/5521978867492" },
  { id: 4, src: logo4, className: "logo-evva", link: "https://www.instagram.com/evva_dor" },
  { id: 5, src: logo2, className: "logo-clinica", link: "https://drbrunoalex-dev.netlify.app" },
];


const infiniteLogos = [...logos, ...logos, ...logos];

export default function LogosCarrossel() {
  return (
    <div className="logos-carrossel">
      <h2>Nossos Clientes</h2>

      <div className="logos-track">
        {infiniteLogos.map((l, i) => (
          <a
            key={`${l.id}-${i}`} // ✅ chave estável
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