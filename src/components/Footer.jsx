import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">LG<span>Tec</span></span>
          <p>Transformando ideias em experiências digitais de alto impacto.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Serviços</h4>
            <a href="#">Criação de Sites</a>
            <a href="#">Aplicativos</a>
            <a href="#">Redes Sociais</a>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <a href="#">Sobre</a>
            <a href="#">Portfólio</a>
            <a href="#">Contato</a>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href="https://wa.me/5521995575988" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/lgtec.oficial" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:contato@lgtec.com.br">E-mail</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 LGTec. Todos os direitos reservados.</p>
        <p>Rio de Janeiro</p>
      </div>
    </footer>
  );
}
