import "../styles/ShowcaseSecond.css";
import img1 from "../assets/img/image-7.jpeg";
import img2 from "../assets/img/image-3.jpg";

export default function ShowcaseSecond() {
  return (
    <section className="showcase">
      {/* TOP (cards grandes) */}
      <div className="showcase-top">
        <div className="big-card left">
          <img className="img-back" src={img1} alt="SNACK Logo" />
          <div className="overlay" />
          <div className="content">
            <span>TECNOLOGIA</span>
            <h2>Diagnóstico Avançado</h2>
            <p>Uma estrutura completa com equipamentos de última geração que transformam sua consulta em uma experiência segura, com resultados precisos e tratamentos humanizados.</p>
          </div>
        </div>

        <div className="big-card right">
          <img className="img-back img-back-bottom" src={img2} alt="SNACK Logo" />
          <div className="overlay" />
          <div className="content">
            <span>ESTÉTICA DENTAL</span>
            <h2>Sorriso Renovado</h2>
            <p>Uma combinação de arte e ciência. Recupere sua autoconfiança com tratamentos personalizados, alinhadores invisíveis e o toque de excelência que você merece.</p>
          </div>
        </div>
      </div>

      {/* BOTTOM (cards pequenos) */}
      <div className="showcase-bottom">
        <div className="small-card">
          <div className="icon">🦷</div>
          <h3>Prevenção e Cuidado</h3>
          <p>Check-ups regulares e limpeza profunda para garantir que sua saúde bucal esteja sempre em dia, evitando problemas futuros e mantendo seu hálito fresco.</p>
        </div>

        <div className="small-card">
          <div className="icon">✨</div>
          <h3>Atendimento Ágil</h3>
          <p>Respeitamos o seu tempo. Consultas com hora marcada e fluxos digitais para que seu tratamento seja concluído de forma rápida, eficiente e sem burocracia.</p>
        </div>

        <div className="small-card">
          <div className="icon">💎</div>
          <h3>Especialidades</h3>
          <p>Seleção completa de serviços, desde implantodontia até harmonização facial, para cuidar de todos os detalhes do seu rosto em um só lugar.</p>
        </div>
      </div>
    </section>
  );
}