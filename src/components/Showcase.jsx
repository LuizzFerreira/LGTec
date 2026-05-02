import "../styles/Showcase.css";
import imgImplantes from "../assets/img/image-9.jpeg"; 
import imgOrtodontia from "../assets/img/image-16.jpeg";
import imgInvisalign from "../assets/img/image-3.jpg";
import imgLentes from "../assets/img/image-4.jpg";
import imgClareamento from "../assets/img/image-14.jpeg";
import imgProtese from "../assets/img/image-6.jpg";

export default function Showcase() {
  const servicos = [
    { title: "Implantes Dentários", img: imgImplantes, desc: "Implantes dentários são raízes artificiais com formato cilíndrico e/ou cônico, em sua maioria feitos de titânio." },
    { title: "Ortodontia", img: imgOrtodontia, desc: "Os tratamentos ortodônticos são popularmente conhecidos por sua capacidade de reposicionar e alinhar dentes." },
    { title: "Invisalign", img: imgInvisalign, desc: "Por que escolher o tratamento Invisalign? Alinha os dentes de maneira mais previsível e confortável." },
    { title: "Lentes de Contato Dentais", img: imgLentes, desc: "Facetas laminadas ou lentes de contato são revestimentos cerâmicos finos, colocados sobre a parte frontal dos dentes." },
    { title: "Clareamento Dental", img: imgClareamento, desc: "Existem algumas formas e técnicas de clareamento dentais, alguns fatores precisam ser avaliados individualmente." },
    { title: "Prótese Dentária", img: imgProtese, desc: "É uma alternativa simples e eficiente para se recuperar a liberdade e a tranquilidade para voltar a sorrir." },
  ];

  return (
    <section className="showcase">
      <h1 className="showcase-title">Clínica Odontológica - São Paulo</h1>
      
      <div className="showcase-grid">
        {servicos.map((item, index) => (
          <div key={index} className="service-card">
            <h3>{item.title}</h3>
            <div className="img-container">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.desc}</p>
            <button className="btn-saiba-mais">saiba mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}