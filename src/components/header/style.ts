import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: dotted;

  img {
    width: 100%;
    height: 460px;
  }

  @media (max-width: 600px) {
    img {
    width: 100%;
    height: auto;
  }
  }
`;
