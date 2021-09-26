import styled from 'styled-components';

export const MainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 3px 3px 5px ${(props) => props.theme.colors.text};
  width: 35%;
  height: 40%;
  padding: 15px;
  position: sticky;
  top: 1rem;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.textSecondary};
  @media(max-width: 600px) {
    width: 100%;
    position: unset;
  }
`;

export const TopUser = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FotoUser = styled.img`
  border-radius: 50%;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.textSecondary};
  margin-right: 20px;
  width: 9rem;
  height: 9rem;
  @media(max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const InfosUser = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
`;

export const NameUser = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  text-shadow: 1px 1px 2px ${(props) => props.theme.colors.text};
  margin-bottom: 0.8rem;
`;

export const Info = styled.p`
  font-size: 0.9rem;
`;

export const BottomUser = styled.div`
  margin: 2rem 0;
  display: flex;
  @media(max-width: 600px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const BottomInfo = styled.div`
  display: flex;
  margin-right: 1.2rem;
  flex-direction: column;
  align-items: center;
  @media(max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const LinkUser = styled.a`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 0.5rem;
  :hover {
    opacity: 0.7;
  }
`;