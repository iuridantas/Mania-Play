import styled from 'styled-components';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 460px;
    height: 460px;
    margin: 5px auto;
  }

  video {
    height: 600px;
    margin: 5px auto;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    margin: 5px auto;

    img {
      width: 350px;
      height: 350px;
    }
  }
`;
