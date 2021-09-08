import React, { useState } from 'react';
import GithubContext from './GithubContext';
import PropTypes from 'prop-types'

function GithubProvider({ children }) {
  const [userGithub, setUserGithub] = useState();

  return (
    <GithubContext.Provider value={{ userGithub, setUserGithub }}>
      { children }
    </GithubContext.Provider>
  );
}

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
