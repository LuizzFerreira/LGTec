import { useState, useEffect, useCallback } from "react";
import "../styles/Depoimentos.css";
import Img4 from "../assets/img/seta.webp";

const depoimentos = [
  {
    nome: "Carlos Mendes",
    cargo: "Dono da Ótica Mendes",
    texto: "A LGTec transformou completamente a presença online da minha ótica. O site ficou incrível e já no primeiro mês vi um aumento real de clientes chegando pelo Google.",
    estrelas: 5,
    inicial: "C",
  },
  {
    nome: "Fernanda Souza",
    cargo: "CEO da FS Moda",
    texto: "Contratei para cuidar do Instagram e os resultados foram além do esperado. Em 3 meses triplicamos o engajamento e as vendas pelo direct explodiram.",
    estrelas: 5,
    inicial: "F",
  },
  {
    nome: "Ricardo Alves",
    cargo: "Proprietário da Auto Peças Alves",
    texto: "O sistema de gestão que desenvolveram pra minha loja mudou tudo. Antes era tudo no papel, hoje controlo estoque, vendas e clientes em um só lugar.",
    estrelas: 5,
    inicial: "R",
  },
  {
    nome: "Juliana Costa",
    cargo: "Fundadora da JC Estética",
    texto: "Profissionalismo do início ao fim. Entregaram o app no prazo, com tudo que pedi e ainda sugeriram melhorias que eu nem tinha pensado. Super recomendo!",
    estrelas: 5,
    inicial: "J",
  },
  {
    nome: "Marcos Oliveira",
    cargo: "Gerente da Construtora MO",
    texto: "Precisava de um site institucional urgente para uma licitação. A LGTec entregou em tempo recorde, com qualidade absurda. Ganhamos a licitação!",
    estrelas: 5,
    inicial: "M",
  },
  {
    nome: "Patrícia Lima",
    cargo: "Diretora da Escola Futuro",
    texto: "Além do site, eles cuidam das nossas redes sociais há 8 meses. A escola cresceu muito em visibilidade e hoje recebemos muito mais alunos novos por indicação digital.",
    estrelas: 5,
    inicial: "P",
  },
];

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback((index, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % depoimentos.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + depoimentos.length) % depoimentos.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const d = depoimentos[current];

  return (
    <section className="depoimentos-section" id="depoimentos">
      <div className="depoimentos-header">
        <span className="section-label">DEPOIMENTOS</span>
        <h2>O que nossos clientes <span>dizem</span></h2>
        <p>Resultados reais de quem confiou na LGTec para crescer no digital.</p>
      </div>

      <div className="dep-carrossel">
        <button className="dep-arrow dep-arrow-prev" onClick={prev} aria-label="Anterior">
          <img src={Img4} alt="Clinica Logo" />
        </button>

        <div className={`dep-card-wrap ${animating ? `exit-${direction}` : "enter"}`}>
          <div className="dep-card">
            <div className="estrelas">
              {Array.from({ length: d.estrelas }).map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="dep-texto">"{d.texto}"</p>
            <div className="dep-autor">
              <div className="dep-avatar">{d.inicial}</div>
              <div>
                <strong>{d.nome}</strong>
                <span>{d.cargo}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="dep-arrow dep-arrow-next" onClick={next} aria-label="Próximo">
          <img src={Img4} alt="Clinica Logo" />
        </button>
      </div>

      <div className="dep-dots">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            className={`dep-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
