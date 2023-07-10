import styled from 'styled-components';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 600px;
    height: 600px;
    margin: 5px auto;
  }

  @media (max-width: 600px) {
    margin: 5px auto;

    img {
      width: 350px;
      height: 350px;
    }
  }
`;
