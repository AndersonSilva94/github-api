import React from 'react';
import useGithub from '../../hooks/Hooks';
import Loading from '../Loading';
import TextInfo from '../TextInfo';
import UserArea from '../UserArea';
import Container from './style';

function GeneralArea() {
  const { githubState } = useGithub();
  const { hasUser, loading } = githubState;

  return (
    <Container>
      {hasUser ? (
        <>
          {loading ? (
            <Loading />
          ) : (
            <UserArea />
          )}
        </>
      ) : (<TextInfo />)}
    </Container>
  );
}

export default GeneralArea;