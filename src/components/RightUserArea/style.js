import styled from 'styled-components';

export const ReposUser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  width: 60%;
  padding: 15px;
  @media(max-width: 800px) {
    width: 100%;
  }
`;