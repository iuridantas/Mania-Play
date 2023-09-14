import styled from 'styled-components';
import { ImWhatsapp } from 'react-icons/im';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  top: 91%;
  left: 90%;
  z-index: 9999;

  @media only screen and (max-width: 600px) {
    top: 85%;
    left: 2%;
  }
`;

export const WhatsApp = styled(ImWhatsapp)`
  font-size: 65px;
  border-radius: 5px;
  padding: 3px;
  color: white;
  background-color: green;

  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;
