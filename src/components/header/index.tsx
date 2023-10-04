import { useEffect, useState } from 'react';
import { Container } from './style';

export function Header() {
  const desktopImages = ['/img/home.png'];
  const mobileImages = ['/img/home_cel.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setCurrentImageIndex(0);

      const links = document.querySelectorAll('link[rel="preload"]');
      links.forEach((link) => link.remove());

      const preloadImages = isMobile ? mobileImages : desktopImages;
      preloadImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = window.innerWidth <= 600;
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <header aria-label="Menu de navegação principal">
      <Container>
        {images.map((src, index) => (
          <div
            key={index}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
          >
            <img src={src} alt="Logotipo da Mania Play" />
          </div>
        ))}
      </Container>
    </header>
  );
}
