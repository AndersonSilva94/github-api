import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.secondary};
`;

function TextInfo(props) {
  return (
    <TextDiv>
      <h1>Nenhum usuário pesquisado</h1>
    </TextDiv>
  );
}

export default TextInfo;
