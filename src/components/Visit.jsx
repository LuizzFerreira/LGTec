import "../styles/Visit.css";
import ImgWp from "../assets/img/logo-wp.webp";
import ImgGm from "../assets/img/gmail.webp";

export default function Visit() {
  return (
    <section className="cta-section" id="contato">
      <div className="cta-bg-grid" />
      <div className="cta-glow" />

      <div className="cta-inner">
        <span className="section-label">VAMOS COMEÇAR?</span>
        <h2>Seu próximo projeto começa <span>aqui</span></h2>
        <p>
          Conte sua ideia. A gente transforma em realidade digital — rápido, bonito e que funciona de verdade.
        </p>

        <div className="cta-actions">
          <a href="https://wa.me/21971384157" className="cta-btn primary" target="_blank" rel="noreferrer" >
            <img src={ImgWp} alt="WhatsApp Logo" /> Falar no WhatsApp
          </a>
          <a href="mailto:luizgferreira13@gmail.com" className="cta-btn secondary">
            <img src={ImgGm} alt="Email Logo" /> Enviar e-mail
          </a>
        </div>

        <div className="cta-info">
          <span>📍 Rio de Janeiro, RJ</span>
          <span>⚡ Resposta em até 30min</span>
          <span>🌎 Atendemos todo o Brasil</span>
        </div>
      </div>
    </section>
  );
}
