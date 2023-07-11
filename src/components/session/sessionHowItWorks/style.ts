import styled from 'styled-components';

export const HowItWorksSession = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;

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
