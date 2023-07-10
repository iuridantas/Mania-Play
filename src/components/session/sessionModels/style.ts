import styled from 'styled-components';

export const ProductAndServiceSession = styled.div`
  margin-top: 10px;
  
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 600px);
    gap: 10px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.4rem;
    }

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
