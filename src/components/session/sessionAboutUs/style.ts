import styled from 'styled-components';

export const AboutUsSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 0 auto;
  max-width: 1440px;

  h2 {
    font-size: 32px;
    text-align: center;
  }

  p {
    margin: 10px 20px;
    text-align: justify;
    font-size: 22px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin: auto;
    }

    p {
      font-size: 16px;
    }
  }
`;
