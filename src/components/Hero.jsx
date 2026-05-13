import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/Hero.css";
import Img4 from "../assets/img/image-23.webp";

import banner1Desktop from "../assets/img/image-35.webp";
import banner2Desktop from "../assets/img/image-32.webp";
import banner3Desktop from "../assets/img/image-35.webp";

import banner1Mobile from "../assets/img/image-36.webp";
import banner2Mobile from "../assets/img/image-39.webp";
import banner3Mobile from "../assets/img/image-38.webp";

const bannersDesktop = [
  { src: banner1Desktop, href: "https://exemplo.com/banner1" },
  { src: banner2Desktop, href: "https://exemplo.com/banner2" },
  { src: banner3Desktop, href: "https://exemplo.com/banner3" },
];
const bannersMobile = [
  { src: banner1Mobile, href: "https://exemplo.com/banner1" },
  { src: banner2Mobile, href: "https://exemplo.com/banner2" },
  { src: banner3Mobile, href: "https://exemplo.com/banner3" },
];

const typewriterTexts = [
  "Impulsione seu Negócio com a LGTec",
  "Sites que Vendem por Você",
  "Apps que Encantam seus Clientes",
];

function useTypewriter(texts, typingSpeed = 60, deletingSpeed = 35, pause = 2500) {
  const [displayed, setDisplayed] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("pause");

  useEffect(() => {
    let timeout;
    if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), pause);
    } else if (phase === "deleting") {
      if (displayed.length === 0) {
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      } else {
        timeout = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), deletingSpeed);
      }
    } else if (phase === "typing") {
      const target = texts[index];
      if (displayed.length === target.length) {
        setPhase("pause");
      } else {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), typingSpeed);
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, displayed, index, texts, typingSpeed, deletingSpeed, pause]);

  return { displayed, phase };
}

function TypewriterTitle() {
  const { displayed, phase } = useTypewriter(typewriterTexts);
  return (
    <>
      {displayed}
      <span className={`tw-cursor ${phase === "pause" ? "blink" : ""}`}>|</span>
    </>
  );
}

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
        p.x += p.vx; p.y += p.vy;
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

function BannerCarrossel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dragStart = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const banners = isMobile ? bannersMobile : bannersDesktop;

  const next = useCallback(() => setCurrent((p) => (p + 1) % banners.length), [banners.length]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + banners.length) % banners.length), [banners.length]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const onDragStart = (clientX) => {
    dragStart.current = clientX;
    isDragging.current = false;
  };

  const onDragMove = (clientX) => {
    if (dragStart.current === null) return;
    if (Math.abs(clientX - dragStart.current) > 5) isDragging.current = true;
  };

  const onDragEnd = (clientX) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <div
      className="banner-carrossel"
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={(e) => onDragEnd(e.clientX)}
      onMouseLeave={() => { dragStart.current = null; }}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
    >
      <div
        className="banner-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div key={i} className="banner-slide">
            <a
              href={banner.href}
              target="_blank"
              rel="noreferrer"
              draggable={false}
              onClick={(e) => { if (isDragging.current) e.preventDefault(); }}
            >
              <img src={banner.src} alt={`Banner LGTec ${i + 1}`} draggable={false} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    setVersion(Math.floor(Math.random() * 2));
  }, []);

  if (version === null) return null;

  return (
    <section className={`hero ${version === 1 ? "hero-v2" : "hero-v1"}`}>
      {version === 0 ? <ParticleCanvas /> : null}
      {version === 0 && <div className="overlay" />}

      <div className="hero-content-container">
        {version === 0 ? (
          <div className="hero-content v1 animate-fade">
            <div>
              <span className="tag">LGTec Soluções Técnicas</span>
              <h1><TypewriterTitle /></h1>
              <p>Sites, apps e design estratégico para resultados reais.</p>
              <div className="buttons">
                <a href="https://wa.me/5521999329346" target="_blank" rel="noreferrer">
                  <button className="primary">Orçamento Grátis</button>
                </a>
              </div>
            </div>
            <img className="hero-side-img" src={Img4} alt="LGTec" />
          </div>
        ) : (
          <BannerCarrossel />
        )}
      </div>
    </section>
  );
}
