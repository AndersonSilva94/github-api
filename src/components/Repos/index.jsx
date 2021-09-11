import React from 'react';
import { CardRepos, LinkRepo, NameRepo, SpanInfo } from './style';

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

export default Repos;