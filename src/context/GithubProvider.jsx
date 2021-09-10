import React, { useCallback, useState } from 'react';
import GithubContext from './GithubContext';
import PropTypes from 'prop-types'

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
      hasUser: false,
      loading: false,
      user: {},
      repositories: [],
      starred: [],
    });
  
    const getUser = async (username) => {
      setGithubState((oldState) => ({
        ...oldState,
        loading: !oldState.loading,
      }));
  
      const fetchUser = await fetch(`https://api.github.com/users/${username}`);
      const responseUser = await fetchUser.json()

      await setGithubState((oldState) => ({
        ...oldState,
        hasUser: true,
        user: { ...responseUser },
        loading: !oldState.loading,
      }));
    };

    const getUserRepos = async (username) => {
      const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos`);
      const responseRepos = await fetchRepos.json();

      await setGithubState((oldState) => ({
        ...oldState,
        repositories: responseRepos
      }));
    };
    
    const contextValue = {
      githubState,
      getUser: useCallback((username) => getUser(username), []),
      getUserRepos: useCallback((username) => getUserRepos(username), []),
    };
  

  return (
    <GithubContext.Provider value={contextValue}>
      { children }
    </GithubContext.Provider>
  );
}

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
