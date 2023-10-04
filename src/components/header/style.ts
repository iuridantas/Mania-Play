import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: dotted;

  img{
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    img {
      height: auto;
    }
  }
`;
