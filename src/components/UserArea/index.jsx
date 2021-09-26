import React from 'react';
import LeftUserArea from '../LeftUserArea';
import RightUserArea from '../RightUserArea';
import { Wrapper } from './style';

function UserArea() {
  return (
    <Wrapper>
      <LeftUserArea />
      <RightUserArea />
    </Wrapper>
  );
}

export default UserArea;