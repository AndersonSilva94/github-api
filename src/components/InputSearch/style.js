import styled from 'styled-components';

export const DivSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const UserInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  padding: 15px;
  width: 90%;
  background: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  @media(max-width: 600px) {
    width: 90%;
  }
`;

export const ButtonSubmit = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 15px;
  transition: 0.2s;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  @media(max-width: 600px) {
    margin-top: 0.5rem;
    width: 90%;
  }
`;
