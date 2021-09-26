import React from 'react';
import { CardRepos, LinkRepo, NameRepo, SpanInfo } from './style';
import PropTypes from 'prop-types';

function Repos({ name, fullName, link }) {
  return (
    <CardRepos>
      <NameRepo>{name}</NameRepo>
      <h4><SpanInfo>full name:</SpanInfo> {fullName}</h4>
      <LinkRepo href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </LinkRepo>
    </CardRepos>
  );
}

Repos.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Repos;