import { useState, useCallback } from "react";
import "../styles/ShowcaseSecond.css";
import proj1 from "../assets/img/image-36.webp";
import proj2 from "../assets/img/otica-logo.webp";
import proj3 from "../assets/img/image-39.webp";
import proj4 from "../assets/img/evva_logo_preto.webp";

const projects = [
  {
    id: 1,
    title: "Website institucional para clínica médica",
    subtitle: "SITE PARA PROFISSIONAL DA SAÚDE",
    description:
      "Desenvolvemos um site moderno e responsivo para fortalecer a presença digital da clínica, facilitando o contato com pacientes e a apresentação dos serviços.",
    image: proj1,
    link: "https://drbrunoalex.netlify.app",
    tags: ["Website", "UX/UI", "Responsivo"],
  },
  {
    id: 2,
    title: "Criação e Edição",
    subtitle: "IDENTIDADE VISUAL",
    description:
      "Criamos diversos materiais de design para a Ótica Hermanos, contribuindo para uma apresentação mais profissional e atrativa da empresa.",
    image: proj2,
    link: "https://www.instagram.com/lgtec.oficial",
    tags: ["Logo Design", "Branding", "Design Gráfico"],
  },
  {
    id: 3,
    title: "Sistema de pedidos e cardápio digital",
    subtitle: "SITE PARA HAMBURGUERIA",
    description:
      "Desenvolvemos uma experiência digital completa para apresentação do cardápio, divulgação dos produtos e aumento da conversão de pedidos online.",
    image: proj3,
    link: "https://www.instagram.com/lgtec.oficial",
    tags: ["Delivery", "Cardápio Digital", "Website"],
  },
  {
    id: 4,
    title: "Edição e Design",
    subtitle: "Conteúdo visual para redes sociais",
    description:
      "Produzimos vídeos editados e materiais gráficos para a EVVA, criando conteúdos que ajudam a fortalecer a comunicação da marca e engajar seu público.",
    image: proj4,
    link: "https://www.instagram.com/p/DUO-HfUkiEM/",
    tags: ["Design", "Vídeo", "Conteúdo Digital"],
  },
];

export default function ShowcaseSecond() {
  const [current, setCurrent] = useState(0);
  const projectsLength = projects.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projectsLength);
  }, [projectsLength]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projectsLength) % projectsLength);
  }, [projectsLength]);

  return (
    <section className="showcase2" id="portfolio">
      <div className="showcase2-inner">
        <div className="showcase2-header">
          <span className="section-label">PORTFÓLIO</span>
          <h2>Projetos que já entregamos com resultado</h2>
          <p>
            Descubra alguns dos trabalhos que desenvolvemos para clientes reais,
            com design estratégico, construção web eficiente e foco em crescimento.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === current ? "active" : "inactive"}`}
            >
              <a
                className="project-card-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-card-content">
                  <span className="project-card-subtitle">{project.subtitle}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="project-card-cta">Ver o projeto</span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="project-carousel-controls">
          <button className="proj-arrow proj-arrow-prev" onClick={prev} aria-label="Anterior projeto">
            ‹
          </button>
          <div className="project-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`project-dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
          <button className="proj-arrow proj-arrow-next" onClick={next} aria-label="Próximo projeto">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
