import styled from 'styled-components';

export const AboutUsSession = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  p {
    margin: 10px 20px;
    text-align: justify;
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    p {
      font-size: 1rem;
    }
  }
`;
