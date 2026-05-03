import "../styles/Visit.css";

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
          <a
            href="https://wa.me/5511973262573"
            className="cta-btn primary"
            target="_blank"
            rel="noreferrer"
          >
            💬 Falar no WhatsApp
          </a>
          <a href="mailto:contato@lgtec.com.br" className="cta-btn secondary">
            ✉️ Enviar e-mail
          </a>
        </div>

        <div className="cta-info">
          <span>📍 São Paulo, SP</span>
          <span>⚡ Resposta em até 2h</span>
          <span>🌎 Atendemos todo o Brasil</span>
        </div>
      </div>
    </section>
  );
}
