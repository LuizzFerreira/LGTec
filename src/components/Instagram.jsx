import "../styles/Instagram.css";
import image39 from "../assets/img/image-39.webp";
import image50 from "../assets/img/image-50.jpg";
import image51 from "../assets/img/image-51.jpg";
import image36 from "../assets/img/image-36.webp";
import image49 from "../assets/img/image-49.png";
import instagramLogo from "../assets/img/Instagram_logo.svg.png";

const posts = [
  {
    id: 1,
    image: image51,
    link: "https://www.instagram.com/p/DYnvAiSudPu/",
  },
  {
    id: 2,
    image: image50,
    link: "https://www.instagram.com/p/DY-4yBNBDL_/",
  },
  {
    id: 3,
    image: image39,
    link: "https://www.instagram.com/p/DYQXtcBFBYW/",
  },
  {
    id: 4,
    image: image36,
    link: "https://www.instagram.com/p/DYF-6S1iVOY/",
  },
  {
    id: 5,
    image: image49,
    link: "https://www.instagram.com/p/DZGYBcNFMNn/",
  },
];

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <div className="instagram-content">
        <a
          className="instagram-header"
          href="https://www.instagram.com/lgtec.oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={instagramLogo} alt="Instagram Logo" className="insta-logo"/>
            <p>
                Acompanhe nossos projetos, bastidores, processos criativos e estratégias
                que ajudam empresas a construir uma presença digital mais forte e
                profissional.
            </p>
        </a>

        <div className="instagram-stack">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <img src={post.image} alt={`Post ${post.id}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}