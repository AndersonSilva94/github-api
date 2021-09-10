import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const DivLoading = styled.div`
  border: 6px solid ${(props) => props.theme.colors.border};
  border-top-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  animation: ${KeyFrameLoading} 1s infinite;
`;