import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import TextInfo from '../TextInfo';
import Container from './style';

function GeneralArea() {
  const { userGithub } = useContext(GithubContext);

  return (
    <Container>
      {!userGithub ? (<TextInfo />) : ()}
    </Container>
  );
}

export default GeneralArea;