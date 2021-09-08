import React, { useState } from 'react';
import Repos from '../Repos';
import { AreaButtons, AreaRepos, ButtonRightUserArea, ReposUser } from './style';

function RightUserArea(props) {
  const [buttonClick, setButtonClick] = useState();

  const verifyClickButton = (event) => {
    const { innerHTML } = event.target;

    setButtonClick(innerHTML);
  }

  console.log(buttonClick);
  return (
    <ReposUser>
      <AreaButtons>
        <ButtonRightUserArea onClick={verifyClickButton}>Repositories</ButtonRightUserArea>
        <ButtonRightUserArea onClick={verifyClickButton}>Starred</ButtonRightUserArea>
      </AreaButtons>
      <AreaRepos>
        {buttonClick && <Repos />}
      </AreaRepos>
    </ReposUser>
  );
}

export default RightUserArea;