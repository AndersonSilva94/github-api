import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/Hooks';
import Repos from '../Repos';
import { AreaButtons, AreaRepos, ButtonRightUserArea, ReposUser } from './style';

function RightUserArea(props) {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [valueClick, setValueClick] = useState();

  const { user, repositories, starred } = githubState;

  useEffect(() => {
    if(user.login) {
      getUserRepos(user.login);
      getUserStarred(user.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const verifyClickButton = (event) => {
    const { innerHTML } = event.target;

    setValueClick(innerHTML);
  }

  return (
    <ReposUser>
      <AreaButtons>
        <ButtonRightUserArea onClick={verifyClickButton}>Repositories</ButtonRightUserArea>
        <ButtonRightUserArea onClick={verifyClickButton}>Starred</ButtonRightUserArea>
      </AreaButtons>
      <AreaRepos>
        {valueClick === 'Repositories' && (
          <>
            {repositories.map((repo) => (
              <Repos key={repo.id} name={repo.name} fullName={repo.full_name} link={repo.html_url} />
            ))}
          </>
        )}
        {valueClick === 'Starred' && (
          <>
            {starred.map((repo) => (
              <Repos key={repo.id} name={repo.name} fullName={repo.full_name} link={repo.html_url} />
            ))}
          </>
        )}
      </AreaRepos>
    </ReposUser>
  );
}

export default RightUserArea;