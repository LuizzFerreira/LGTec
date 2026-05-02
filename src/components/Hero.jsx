import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import img1 from "../assets/img/image-7.jpeg";
import img2 from "../assets/img/image-17.jpeg";
import img3 from "../assets/img/image-8.jpeg";
import img4 from "../assets/img/image-14.jpeg";;

const images = [img1, img2, img3, img4];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div
            className="slide"
            key={i}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="overlay" />

      <div className="hero-content">
        <span className="tag">São Paulo</span>

        <h1>
          Bem Vindo A <span>Clinica Dr. Bruno</span>
        </h1>

        <p>Transformando Vidas Através de Sorrisos</p>

        <div className="buttons">
          <a href="https://wa.me/5511973262573" target="_blank" rel="noreferrer">
            <button className="primary">Entre em contato</button>
          </a>
          <Link to="/menu">
            <button className="secondary">Clínica</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
