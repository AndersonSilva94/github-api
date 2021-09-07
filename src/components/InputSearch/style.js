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
  background-color: #8015AD;
  border: 1px solid #FFF;
  border-radius: 5px;
  color: #FFF;
  cursor: pointer;
  padding: 15px;
  transition: 0.2s;
  :hover {
    background-color: #FFF;
    color: #8015AD;
    border-color: #8015AD;
  }
`;
