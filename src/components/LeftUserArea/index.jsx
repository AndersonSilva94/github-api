import React from 'react';
import { BottomInfo, BottomUser, FotoUser, Info, InfosUser, LinkUser, MainUser, NameUser, TopUser } from './style';
import useGithub from '../../hooks/Hooks';

function LeftUserArea(props) {
  const { githubState } = useGithub();
  const { user: { name, login, avatar_url, company, location,
    blog, followers, following, public_gists, public_repos } } = githubState;

  return (
    <MainUser>
      <TopUser>
        <FotoUser src={avatar_url} />
        <InfosUser>
          <NameUser>{name}</NameUser>
          <Info>
            <b>Username:</b>
            {' '}
            <LinkUser href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">
              @{login}
            </LinkUser>
          </Info>
          <Info><b>Company:</b> {company}</Info>
          <Info><b>Location:</b> {location}</Info>
          <Info>
            <b>Blog:</b>
            {' '}
            <LinkUser href={blog} target="_blank" rel="noopener noreferrer">
              {blog}
            </LinkUser>
          </Info>
        </InfosUser>
      </TopUser>
      <BottomUser>
        <BottomInfo>
          <h4>Followers</h4>
          <p>{followers}</p>
        </BottomInfo>
        <BottomInfo>
          <h4>Followings</h4>
          <p>{following}</p>
        </BottomInfo>
        <BottomInfo>
          <h4>Gists</h4>
          <p>{public_gists}</p>
        </BottomInfo>
        <BottomInfo>
          <h4>Repos</h4>
          <p>{public_repos}</p>
        </BottomInfo>
      </BottomUser>
    </MainUser>
  );
}

export default LeftUserArea;