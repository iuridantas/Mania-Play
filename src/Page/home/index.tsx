import { Container, WhatsAppButton, WhatsApp } from './style';
import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionModels } from '../../components/session/sessionModels';
import { SessionHowItWorks } from '../../components/session/sessionHowItWorks';

export function Home() {
  return (
    <Container aria-label="Página inicial">
      <WhatsAppButton
        href="https://api.whatsapp.com/send?phone=5516996013157&text=Ol%C3%A1%20Mania%20Play%20Brinquedos,%20vim%20atrav%C3%A9s%20do%20seu%20site,%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Número do WhatsApp de Mania Play Brinquedos"
        title="Número do WhatsApp de Mania Play Brinquedos"
      >
        <WhatsApp
          className="whatsApp"
          alt="Ícone representando o WhatsApp de Mania Play Brinquedos"
        />
      </WhatsAppButton>
      <SessionAboutUs />
      <SessionHowItWorks/>
      <SessionModels />
    </Container>
  );
}
