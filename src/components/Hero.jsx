import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/Hero.css";

import banner1Desktop from "../assets/img/image-41.webp";
import banner2Desktop from "../assets/img/image-32.png";
import banner3Desktop from "../assets/img/image-45.png";

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
  return (
    <section className="hero hero-v2">
      <div className="hero-content-container">
        <BannerCarrossel />
      </div>
    </section>
  );
}
