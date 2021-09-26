import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${(props) => props.theme.colors.background};
  position: absolute;
`;

export const Container = styled.div`
  padding: 15px;
`;

export const Toggle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 15px;
`;