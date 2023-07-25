import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: dotted;

  img{
    width: 100%;
  }

  @media (max-width: 600px) {
    img {
      width: 100vw;
      height: auto;
    }
  }
`;
