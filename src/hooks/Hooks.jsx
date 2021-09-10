import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const useGithub = () => {
  const { githubState, setGithubState, getUser, getUserRepos, getUserStarred } = useContext(GithubContext);

  return { githubState, setGithubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;