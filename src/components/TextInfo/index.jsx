import React from 'react';
import styled from 'styled-components';

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function TextInfo(props) {
  return (
    <TextDiv>
      <h1>Nenhum usuário pesquisado</h1>
    </TextDiv>
  );
}

export default TextInfo;
