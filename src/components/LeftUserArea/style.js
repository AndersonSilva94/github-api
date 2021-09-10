import styled from 'styled-components';

export const MainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 35%;
  height: 40%;
  padding: 15px;
  position: sticky;
  top: 1rem;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.white};
  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const TopUser = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FotoUser = styled.img`
  border-radius: 50%;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.white};
  margin-right: 20px;
  width: 9rem;
  height: 9rem;
  box-shadow: 2px 2px 10px ${(props) => props.theme.colors.text};
`;

export const InfosUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameUser = styled.h3`
  color: ${(props) => props.theme.colors.white};
  text-shadow: 1px 1px 2px ${(props) => props.theme.colors.text};
  margin-bottom: 0.8rem;
`;

export const Info = styled.p`
  font-size: 0.9rem;
`;

export const BottomUser = styled.div`
  margin: 2rem 0;
  display: flex;
  `;

export const BottomInfo = styled.div`
  display: flex;
  margin-right: 1.2rem;
  flex-direction: column;
  align-items: center;
`;