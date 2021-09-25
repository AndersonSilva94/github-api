import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  word-break: break-all;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`;
