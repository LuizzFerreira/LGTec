import { useEffect, useRef, useState } from "react";
import "../styles/ShowcaseSecond.css";

function useCountUp(target, duration = 2000, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

const stats = [
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 100, suffix: "%", label: "Clientes satisfeitos" },
  { value: 3, suffix: " anos", label: "De experiência" },
  { value: 24, suffix: "h", label: "Suporte disponível" },
];

const diferenciais = [
  { icon: "⚡", title: "Entrega Rápida", desc: "Seu projeto no ar em tempo recorde, sem abrir mão da qualidade." },
  { icon: "🎯", title: "Foco em Resultado", desc: "Cada decisão de design e código é pensada para converter mais." },
  { icon: "🔒", title: "Código Limpo", desc: "Sistemas escaláveis, seguros e fáceis de manter a longo prazo." },
];

export default function ShowcaseSecond() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="showcase2" id="portfolio" ref={sectionRef}>
      <div className="showcase2-inner">
        <div className="stats-row">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} trigger={visible} />
          ))}
        </div>

        <div className="diferenciais-row">
          <div className="diferenciais-text">
            <span className="section-label">POR QUE A LGTEC?</span>
            <h2>Tecnologia com <span>propósito</span></h2>
            <p>Não somos só uma agência. Somos parceiros de crescimento. Cada projeto é tratado como se fosse o nosso próprio negócio.</p>
          </div>
          <div className="diferenciais-cards">
            {diferenciais.map((d, i) => (
              <div key={i} className="dif-card">
                <span className="dif-icon">{d.icon}</span>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, trigger }) {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="stat-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
