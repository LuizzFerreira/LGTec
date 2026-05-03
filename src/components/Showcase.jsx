import { useRef } from "react";
import "../styles/Showcase.css";
import imgSites from "../assets/img/sites.png";
import imgSocial from "../assets/img/social.png";
import imgSocial2 from "../assets/img/image-24.png";
import imgSocial3 from "../assets/img/image-25.png";

const servicos = [
  {
    id: "web",
    tag: "Criação de Sites",
    title: "Websites que convertem visitantes em clientes",
    desc: "Design moderno, performance máxima e SEO otimizado para o seu negócio crescer online.",
    img: imgSites,
  },
  {
    id: "design",
    tag: "Design & Conteúdo",
    title: "Design criativo e produção visual",
    desc: "Criação de artes no Photoshop, edição de vídeos e desenvolvimento de conteúdos visuais que destacam sua marca e aumentam o engajamento nas redes sociais.",
    img: imgSocial3,
  },
  {
    id: "social",
    tag: "Redes Sociais",
    title: "Presença digital que gera resultado",
    desc: "Gestão estratégica de Instagram, TikTok e LinkedIn com conteúdo que engaja.",
    img: imgSocial,
  },
  {
    id: "ecom",
    tag: "Sistemas & E-commerce",
    title: "Sua loja ou sistema rodando 24h",
    desc: "Plataformas de venda e sistemas de gestão personalizados para o seu negócio.",
    img: imgSocial2,
  },
];

function TiltCard({ item }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const rotateX = (((e.clientY - rect.top) / rect.height) - 0.5) * -12;
    const rotateY = (((e.clientX - rect.left) / rect.width) - 0.5) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`service-card card-${item.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-glow" />
      <div className="card-top">
        <span className="card-tag">{item.tag}</span>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
      </div>
      {item.img && (
        <div className="card-img-wrap">
          <img src={item.img} alt={item.tag} />
        </div>
      )}
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="showcase" id="servicos">
      <div className="showcase-header">
        <span className="section-label">O QUE FAZEMOS</span>
        <h2 className="showcase-title">
          Soluções digitais que <span>transformam negócios</span>
        </h2>
        <p className="showcase-sub">
          Da ideia ao produto final — criamos experiências digitais que geram resultado.
        </p>
      </div>

      <div className="showcase-grid">
        {servicos.map((item) => (
          <TiltCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
