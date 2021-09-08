import styled from 'styled-components';

export const DivSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

export const UserInput = styled.input`
  border: 2px solid grey;
  border-radius: 5px;
  padding: 15px;
  width: 90%;
`;

export const ButtonSubmit = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  padding: 15px;
  transition: 0.2s;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  :hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;
