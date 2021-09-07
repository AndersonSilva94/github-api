import React from 'react';
import GithubContext from './GithubContext';
import PropTypes from 'prop-types'

function GithubProvider({ children }) {
  return (
    <GithubContext.Provider >
      { children }
    </GithubContext.Provider>
  );
}

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubProvider;
