import "../styles/Showcase.css";
import imgSites from "../assets/img/image-47.webp";
import imgSocial3 from "../assets/img/image-48.webp";

const servicos = [
  {
    id: "web",
    tag: "01",
    label: "Sites",
    title: "Criação de Sites",
    desc: "Design moderno, performance máxima e SEO otimizado para o seu negócio crescer online.",
    img: imgSites,
    span: "col-2",
    link: "https://www.instagram.com/lgtec.oficial/",
  },
  {
    id: "Sistemas",
    tag: "02",
    label: "Sistemas",
    title: "Sua loja ou sistema rodando 24h",
    desc: "Plataformas de venda e sistemas de gestão de estoque personalizados para o seu negócio.",
    img: null,
    span: "col-1",
    link: "https://wa.me/5521999329346",
  },
  {
    id: "social",
    tag: "03",
    label: "Social",
    title: "Redes Sociais",
    desc: "Gestão estratégica de Instagram, TikTok e LinkedIn com conteúdo que engaja e converte.",
    img: null,
    span: "col-1",
    link: "https://www.instagram.com/lgtec.oficial",
  },
  {
    id: "design",
    tag: "04",
    label: "Design",
    title: "Design & Conteúdo",
    desc: "Artes, edição de vídeo e identidade visual que destacam sua marca no digital.",
    img: imgSocial3,
    span: "col-2",
    link: "https://www.instagram.com/lgtec.oficial",
  }
];

export default function Showcase() {
  return (
    <section className="showcase" id="servicos">
      <div className="showcase-header">
        <span className="section-label">O QUE FAZEMOS</span>
        <h2 className="showcase-title">
          Soluções digitais que <span>transformam negócios</span>
        </h2>
      </div>

      <div className="bento-grid">
        {servicos.map((item) => (
          <div key={item.id} className={`bento-card bento-${item.span} card-${item.id}`}>
            {item.img && (
              <div className="bento-img">
                <img src={item.img} alt={item.title} draggable={false} />
              </div>
            )}
            <div className="bento-hover">
              <span className="bento-hover-tag">
                {item.tag} — {item.label}
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <a href={item.link} target="_blank" className="bento-cta">
                Saiba mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
