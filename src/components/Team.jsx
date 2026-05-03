import "../styles/Team.css";

const stack = [
  "React", "Next.js", "Node.js", "React Native",
  "TypeScript", "Tailwind", "Firebase", "AWS",
  "Figma", "WordPress", "Shopify", "PostgreSQL",
];

export default function Team() {
  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-inner">
        <div className="sobre-content">
          <span className="section-label">SOBRE A LGTEC</span>
          <h2>Criamos o digital que o seu negócio <span>merece</span></h2>
          <p>
            A LGTec nasceu com uma missão: tornar a tecnologia acessível e poderosa para empresas de todos os tamanhos.
            Desenvolvemos sites, aplicativos, sistemas e estratégias de redes sociais com foco total em resultado.
          </p>
          <p>
            Cada projeto é único. Cada solução é pensada do zero para o seu negócio.
          </p>
          <a href="/location" className="sobre-cta">Fale com a gente →</a>
        </div>

        <div className="sobre-visual">
          <div className="stack-title">Nossa Stack</div>
          <div className="stack-grid">
            {stack.map((tech) => (
              <span key={tech} className="stack-badge">{tech}</span>
            ))}
          </div>

          <div className="sobre-card-glow">
            <div className="glow-orb orb1" />
            <div className="glow-orb orb2" />
            <div className="sobre-code">
              <span className="code-line"><span className="c-purple">const</span> <span className="c-cyan">lgtec</span> = {"{"}</span>
              <span className="code-line">  missao: <span className="c-green">"transformar negócios"</span>,</span>
              <span className="code-line">  foco: <span className="c-green">"resultado real"</span>,</span>
              <span className="code-line">  qualidade: <span className="c-purple">true</span></span>
              <span className="code-line">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
