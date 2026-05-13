import "../styles/Team.css";
import Img4 from "../assets/img/image-33.webp";

const valores = [
  "Criatividade",
  "Performance",
  "Design moderno",
  "Tecnologia",
  "Atendimento próximo",
  "Soluções personalizadas",
];

export default function AboutUs() {
  return (
    <section className="about-section" id="quem-somos">
      <div className="about-inner">

        <div className="about-visual">
          <div className="about-card">
            <img className="img-about" src={Img4} alt="LGTec" />
            {/*<div className="about-glow glow1" />
            <div className="about-glow glow2" />

            <div className="about-mini-label">LGTEC</div>

            <h3>
              Transformando ideias em experiências digitais que realmente geram resultado.
            </h3>

            <p>
              Mais do que criar sites, criamos presença digital para empresas que querem crescer,
              vender mais e se destacar no mercado.
            </p>

            <div className="about-values">
              {valores.map((item) => (
                <span key={item} className="value-badge">
                  {item}
                </span>
              ))}
            </div>*/}
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">QUEM SOMOS NÓS</span>

          <h2>
            A tecnologia certa pode mudar o rumo do seu <span>negócio</span>
          </h2>

          <p>
            A LGTEC nasceu com o objetivo de ajudar empresas a crescerem no digital
            através de soluções modernas, rápidas e estratégicas.
          </p>

          <p>
            Trabalhamos com desenvolvimento web, aplicativos, design e presença digital,
            sempre focando em criar experiências que unem visual impactante, performance
            e resultado real.
          </p>

          <p>
            Cada cliente possui uma necessidade diferente — por isso, cada projeto
            é pensado de forma única.
          </p>

          <a href="https://www.instagram.com/lgtec.oficial" target="_blank" rel="noreferrer" className="about-cta">
            Conheça nosso trabalho →
          </a>
        </div>
      </div>
    </section>
  );
}