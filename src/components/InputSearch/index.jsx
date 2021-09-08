import React, { useContext, useState } from 'react';
import GithubContext from '../../context/GithubContext';
import { DivSearch, UserInput, ButtonSubmit } from './style';

function InputSearch() {
  const { setUserGithub } = useContext(GithubContext);
  const [user, setUser] = useState('');

  const submitSearch = (event) => {
    setUserGithub(user);
  }

  return (
    <DivSearch>
      <UserInput
        placeholder='Digite seu usuário do Github'
        value={ user }
        onChange={ (event) => setUser(event.target.value) }
      />
      <ButtonSubmit onClick={ submitSearch } >
        Pesquisar
      </ButtonSubmit>
    </DivSearch>
  );
}

export default InputSearch;