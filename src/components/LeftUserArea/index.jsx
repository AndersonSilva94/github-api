import React from 'react';
import { BottomInfo, BottomUser, FotoUser, Info, InfosUser, MainUser, NameUser, TopUser } from './style';
import photo from '../../assets/profile-photo.jpg'

function LeftUserArea(props) {
  return (
    <MainUser>
      <TopUser>
        <FotoUser src={photo} />
        <InfosUser>
          <NameUser>Anderson Silva</NameUser>
          <Info>Username: </Info>
          <Info>Company: </Info>
          <Info>Location: </Info>
          <Info>Blog: </Info>
        </InfosUser>
      </TopUser>
      <BottomUser>
        <BottomInfo>
          <p>Followers</p>
          <p>1</p>
        </BottomInfo>
        <BottomInfo>
          <p>Followings</p>
          <p>1</p>
        </BottomInfo>
        <BottomInfo>
          <p>Gists</p>
          <p>1</p>
        </BottomInfo>
        <BottomInfo>
          <p>Repos</p>
          <p>1</p>
        </BottomInfo>
      </BottomUser>
    </MainUser>
  );
}

export default LeftUserArea;