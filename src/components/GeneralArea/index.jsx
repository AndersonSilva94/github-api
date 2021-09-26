import React from 'react';
import useGithub from '../../hooks/Hooks';
import Loading from '../Loading';
import NotUser from '../NotUser';
import TextInfo from '../TextInfo';
import UserArea from '../UserArea';
import Container from './style';

function GeneralArea() {
  const { githubState } = useGithub();
  const { hasUser, loading, user } = githubState;

  return (
    <Container>
      {hasUser ? (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {user.message ? (
                <NotUser />
              ) : (
                <UserArea />
              )}
            </>
          )}
        </>
      ) : (<TextInfo />)}
    </Container>
  );
}

export default GeneralArea;