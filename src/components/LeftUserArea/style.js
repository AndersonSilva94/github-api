import styled from 'styled-components';

export const MainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8015AD;
  border-radius: 5px;
  width: 35%;
  padding: 15px;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const TopUser = styled.div`
  display: flex;
  align-items: center;
`;

export const FotoUser = styled.img`
  border-radius: 50%;
  padding: 5px;
  background-color: #FFF;
  margin-right: 20px;
  width: 10rem;
  height: 10rem;
  box-shadow: 2px 2px 10px black;
`;

export const InfosUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameUser = styled.h2`
  color: #FFF;
`;

export const Info = styled.p`
  font-size: 1rem;
  color: #FFF;
`;

export const BottomUser = styled.div`
  margin-top: 2rem;
  display: flex;
  `;

export const BottomInfo = styled.div`
  display: flex;
  margin-right: 1.2rem;
  flex-direction: column;
  align-items: center;
`;