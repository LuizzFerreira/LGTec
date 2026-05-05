import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import sideImg1 from "../assets/img/sites.webp";
import sideImg2 from "../assets/img/image-21.webp";
import sideImg3 from "../assets/img/image-22.webp";
import Img4 from "../assets/img/image-23.webp";

const hero2Content = [
  {
    tag: "Desenvolvimento Web",
    title: "Sites de Alta <span>Performance</span>",
    text: "Plataformas rápidas e otimizadas para converter visitantes em clientes.",
    image: sideImg1,
    link: "https://wa.me/5521999329346",
  },
  {
    tag: "Mobile Apps",
    title: "Sua Ideia no <span>Bolso</span> do Cliente",
    text: "Criação de aplicativos nativos com foco em experiência do usuário.",
    image: sideImg2,
    link: "https://wa.me/5521999329346",
  },
  {
    tag: "Social Design",
    title: "Design que <span>Vende</span>",
    text: "Sua marca com visual profissional e consistente nas redes sociais.",
    image: sideImg3,
    link: "https://wa.me/5521999329346",
  },
];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 80;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124, 58, 237, 1.0)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [version, setVersion] = useState(null);

  useEffect(() => {
    setVersion(Math.floor(Math.random() * 2));
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % hero2Content.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (version === null) return null;

  return (
    <section className={`hero ${version === 1 ? "hero-v2" : "hero-v1"}`}>
      {version === 0 ? (
        <ParticleCanvas />
      ) : (
        <div className="static-bg-dark" />
      )}

      <div className="overlay" />

      <div className="hero-content-container">
        {version === 0 ? (
          <div className="hero-content v1 animate-fade">
            <div>
              <span className="tag">LGTec Soluções Técnicas</span>
              <h1>Impulsione seu Negócio com a <span>LGTec</span></h1>
              <p>Sites, apps e design estratégico para resultados reais.</p>
              <div className="buttons">
                <a href="https://wa.me/5521999329346" target="_blank" rel="noreferrer">
                  <button className="primary">Orçamento Grátis</button>
                </a>
              </div>
            </div>
            <img className="InstaLogo" src={Img4} alt="Clinica Logo" />
          </div>
        ) : (
          <div className="hero2-split">
            <div className="text-side">
              {hero2Content.map((item, i) => (
                <div key={i} className={`content-box ${i === textIndex ? "active" : "inactive"}`}>
                  <span className="tag">{item.tag}</span>
                  <h1 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.text}</p>
                  <div className="buttons">
                    <Link to={item.link}><button className="primary">Ver Mais</button></Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="image-side">
              {hero2Content.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt="Serviço LGTec"
                  className={i === textIndex ? "img-active" : "img-inactive"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
