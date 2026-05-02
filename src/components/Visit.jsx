import { Link } from "react-router-dom";
import "../styles/Visit.css";
import img1 from "../assets/img/image-9.jpeg";

export default function Visit() {
  return (
    <section className="visit">
      <div>
        <div className="visit-content">
          <span className="tag">VISITE-NOS</span>
          <h2>No Coração da Cidade</h2>
          <p>
            Encontre-nos no distrito histórico, onde a energia urbana encontra a
            tradição artesanal. Junte-se a nós para a experiência SNACK completa.
          </p>
          <div className="info">
            <div>
              <span>📍</span>
              <p>Rua Arlinda Ramos Roleira, 177- SP, 04860-070</p>
            </div>
            <div>
              <span>⏰</span>
              <p>Seg-Dom: 11:00 - 23:00</p>
            </div>
          </div>
          <Link to="/location">
            <button className="btn">Como Chegar</button>
          </Link>
        </div>
        <img className="visit-image" src={img1} alt="SNACK Logo" />
      </div>
    </section>
  );
}