import "../styles/Team.css";
// Substitua pelos caminhos reais das suas fotos
import fotoBruno from "../assets/img/image-9.jpeg";
import fotoDra from "../assets/img/image-19.jpeg";
import fotoAlex from "../assets/img/image-18.jpeg";

export default function Equipe() {
  const profissionais = [
    {
      nome: "Dr. Bruno Alex",
      cargo: null,
      cro: null,
      especialidades: ["RT - Responsável técnico"],
      foto: fotoBruno,
    },
    {
      nome: "Dra Stefani Maciel",
      cargo: null,
      cro: null,
      especialidades: ["Harmonização orofacial - HOF"],
      foto: fotoDra,
    },
        {
      nome: "Dr Alexandre Ortodontista",
      cargo: null,
      cro: null,
      especialidades: [null],
      foto: fotoAlex,
    }
  ];

  return (
    <section className="equipe-section">
      <h2 className="equipe-title">Nossa Equipe</h2>
      <div className="equipe-divider"></div>

      <div className="equipe-container">
        {profissionais.map((pro, index) => (
          <div key={index} className="membro-card">
            <div className="membro-foto">
              <img src={pro.foto} alt={pro.nome} />
            </div>
            <div className="membro-info">
              <h3>{pro.nome}</h3>
              <p className="cargo">{pro.cargo}</p>
              <p className="cro">{pro.cro}</p>
              <div className="especialidades">
                {pro.especialidades.map((esp, i) => (
                  <p key={i}>{esp}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}