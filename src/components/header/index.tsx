import { Container } from './style';

export function Header() {
  return (
    <header aria-label="Menu de navegação principal">
      <Container>
        <img
          src="/img/home.png"
          alt="logo"
          aria-label="Logotipo da Mania Play"
        />
      </Container>
    </header>
  );
}
