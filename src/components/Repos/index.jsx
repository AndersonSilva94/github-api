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
  margin-top: 0.5rem;
`;

function Repos({ name, fullName, link }) {
  return (
    <CardRepos>
      <h3>{name}</h3>
      <h4>{fullName}</h4>
      <p>{link}</p>
    </CardRepos>
  );
}

export default Repos;