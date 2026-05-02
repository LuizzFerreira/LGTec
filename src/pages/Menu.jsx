import "../styles/Menu.css";
import fotoFachada1 from "../assets/img/image-8.jpeg";
import fotoFachada2 from "../assets/img/image-7.jpeg";
import fotoRecepcao from "../assets/img/image-17.jpeg";
import fotoInterna from "../assets/img/image-14.jpeg";
import fotoInterna2 from "../assets/img/image-21.jpeg";
import fotoInterna3 from "../assets/img/image-20.jpeg";

export default function Galeria() {
  const fotos = [
    { 
      src: fotoFachada1, 
      alt: "Limpeza Dental", 
      titulo: "Limpeza Dental",
      descricao: "Remoção de tártaro e placa para manter a saúde bucal."
    },
    { 
      src: fotoFachada2, 
      alt: "Clareamento Dental", 
      titulo: "Clareamento",
      descricao: "Deixe seu sorriso mais branco com segurança."
    },
    { 
      src: fotoInterna, 
      alt: "Ortodontia", 
      titulo: "Aparelhos Ortodônticos",
      descricao: "Correção do alinhamento dos dentes."
    },
    { 
      src: fotoRecepcao, 
      alt: "Implantes Dentários", 
      titulo: "Implantes",
      descricao: "Reposição de dentes com tecnologia avançada."
    },
    { 
      src: fotoInterna2, 
      alt: "Tratamento de Canal", 
      titulo: "Canal",
      descricao: "Tratamento da raiz do dente para eliminar dor."
    },
    { 
      src: fotoInterna3, 
      alt: "Facetas Dentárias", 
      titulo: "Facetas",
      descricao: "Lentes de porcelana para um sorriso perfeito."
    },
  ];

  return (
    <section className="galeria-section">
      <div className="galeria-header">
        <h2>Dr. Bruno Alex - UNIDADE SÃO PAULO</h2>
        <p>VENHA NOS VISITAR</p>
      </div>

      <div className="galeria-grid">
        {fotos.map((foto, index) => (
          <div key={index} className="galeria-item">
            <img src={foto.src} alt={foto.alt} />

            <div className="overlay">
              <h3>{foto.titulo}</h3>
              <p>{foto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}