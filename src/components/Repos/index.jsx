import React from 'react';
import styled from 'styled-components';

export const CardRepos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  width: 30%;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;

function Repos(props) {
  return (
    <CardRepos>
      <h3>Nome do repositório</h3>
      <h4>Full name</h4>
      <p>link do repositório</p>
    </CardRepos>
  );
}

export default Repos;