import styled from 'styled-components';

export const ModelsSession = styled.div`
  margin: 10px auto;
  max-width: 1440px;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    section {
      gap: 10px;
    }
  }
`;
