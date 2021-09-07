import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import TextInfo from '../TextInfo';
import UserArea from '../UserArea';
import Container from './style';

function GeneralArea() {
  const { userGithub } = useContext(GithubContext);

  return (
    <Container>
      {!userGithub ? (<TextInfo />) : (<UserArea />)}
    </Container>
  );
}

export default GeneralArea;