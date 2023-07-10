import { Container } from './style';

export function Header() {
  return (
    <header>
      <Container aria-label="Menu de navegação principal">
        <img
          src="/img/home.jpeg"
          alt="logo"
          aria-label="Logotipo da JPrint Digital"
        />
      </Container>
    </header>
  );
}