import styled from 'styled-components';

export const ModelsSession = styled.div`
  margin: 10px 0 20px 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 480px);
    gap: 10px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
      margin: auto;
    }

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
