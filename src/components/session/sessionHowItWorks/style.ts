import styled from 'styled-components';

export const HowItWorksSession = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;

  h2 {
    font-size: 2rem;
    text-align: center;
    grid-column: 1 / span 2;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    margin: 5px 20px;
    text-align: justify;
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    h2 {
      font-size: 1.4rem;
      grid-column: 1;
      margin: 0 0 10px 0;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
