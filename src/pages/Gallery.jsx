import { useState } from "react";
import "../styles/Gallery.css";
import img1 from "../assets/img/image-7.jpeg";
import img2 from "../assets/img/image-8.jpeg";
import img3 from "../assets/img/image-14.jpeg";
import img4 from "../assets/img/image-9.jpeg";
import img5 from "../assets/img/image-20.jpeg";
import img6 from "../assets/img/image-17.jpeg";
import img7 from "../assets/img/image-19.jpeg";
import img8 from "../assets/img/image-18.jpeg";

const images = [
  { src: img1, category: "burgers" },
  { src: img2, category: "burgers" },
  { src: img3, category: "burgers" },
  { src: img4, category: "atmosphere" },
  { src: img5, category: "burgers" },
  { src: img6, category: "people" },
  { src: img7, category: "people" },
  { src: img8, category: "people" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section className="Gallery">
      {/* HEADER */}
      <div className="Gallery-header">
        <h1>Dr. Bruno Alex UNIDADE SAO PAULO</h1>
        <p>
          Uma jornada visual pela nossa clinica.
        </p>

        <div className="filters">
          <button onClick={() => setFilter("all")}>Tudo</button>
          <button onClick={() => setFilter("burgers")}>Os Tratamentos</button>
          <button onClick={() => setFilter("atmosphere")}>Ambiente</button>
          <button onClick={() => setFilter("people")}>Nossa Gente</button>
        </div>
      </div>

      {/* GRID */}
      <div className="Gallery-grid">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="Gallery-item"
            style={{ backgroundImage: `url(${img.src})` }}
          />
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="Gallery-cta">
        <h2>PRONTO PARA A EXPERIÊNCIA REAL?</h2>
        <div className="buttons">
          <button className="primary">Visite-nos</button>
          <button className="secondary">Peça Online</button>
        </div>
      </div>
    </section>
  );
}
