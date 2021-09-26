import styled from 'styled-components';

export const CardRepos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  width: 48%;
  padding: 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 0.5rem;
  word-break: break-all;
  @media(max-width: 414px) {
    width: 100%;
  }
`;

export const NameRepo = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const LinkRepo = styled.a`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 0.5rem;
  :hover {
    opacity: 0.7;
  }
`;

export const SpanInfo = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;
