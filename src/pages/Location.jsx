import "../styles/Location.css";
import img1 from "../assets/img/image-8.jpeg";
import img2 from "../assets/img/image-14.jpeg";

export default function Location() {
  return (
    <section className="location-page">
      {/* HEADER */}
      <div className="location-header">
        <span className="tag">ONDE ESTAMOS</span>
        <h1>No Coração da Cidade</h1>
        <p>R. Arlinda Ramos Roleira, 177</p>
      </div>

      {/* GRID PRINCIPAL */}
    <div className="location-grid">
      {/* MAPA */}
      <div className="map">
        <iframe
          title="Localização Dr. Bruno Alex"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.64765377543!2d-46.6853755!3d-23.731422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce457f9c89e701%3A0x67a3f36070659635!2sR.%20Arlinda%20Ramos%20Roleira%2C%20177%20-%20S%C3%A3o%20Paulo%2C%20SP%2C%2004860-070!5e0!3m2!1spt-BR!2sbr!4v1713290000000!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
        ></iframe>

        <div className="map-overlay">
          <h3>Nossa Unidade</h3>
          <p>R. Arlinda Ramos Roleira, 177</p>
          <p>São Paulo - SP, 04860-070</p>
        </div>
      </div>

      {/* SIDE INFO */}
      <div className="side">
        <div className="card">
          <h3>Agendamento</h3>
          <p>📞 +55 (11) 97326-2573</p>
          <p>✉️ drbrunoalex5@gmail.com</p>
        </div>

        <div className="card">
          <h3>Horário de Atendimento</h3>

          <div className="hours">
            <p><strong>Seg - Sex:</strong> 08:00 - 18:00</p>
            <p><strong>Sáb:</strong> 08:00 - 12:00</p>
            <p><strong>Dom:</strong> Fechado</p>
          </div>
        </div>
      </div>
    </div>

      {/* Gallery FINAL */}
      <div className="location-bottom">
        <div className="img img1" style={{ backgroundImage: `url(${img1})` }} />
        <div className="img img2" style={{ backgroundImage: `url(${img2})` }} />

        <div className="follow">
          <h3>Siga o Sabor</h3>
          <p>Junte-se à nossa comunidade para novidades e promoções diárias.</p>

          <div className="icons">
            <span>🔗</span>
            <span>📸</span>
            <span>🐦</span>
          </div>

          <button>FAÇA PARTE DO CLUBE SNACK</button>
        </div>
      </div>
    </section>
  );
}