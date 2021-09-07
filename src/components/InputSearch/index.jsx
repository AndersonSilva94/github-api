import React, { useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import UserInput from './style';

function InputSearch() {
  const { userGithub, setUserGithub } = useContext(GithubContext);

  return (
    <div>
      <UserInput
        placeholder='Digite seu usuário do Github'
        value={ userGithub }
        onChange={ (e) => setUserGithub(e.target.value) }
      />
    </div>
  );
}

export default InputSearch;