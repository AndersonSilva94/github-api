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

export const AreaButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonRightUserArea = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  padding: 15px;
  transition: 0.2s;
  width: 45%;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 2px 2px 5px ${(props) => props.theme.colors.text};
  }
`;

export const AreaRepos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;