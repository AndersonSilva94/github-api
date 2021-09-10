import React, { useState } from 'react';
import useGithub from '../../hooks/Hooks';
import { DivSearch, UserInput, ButtonSubmit } from './style';

function InputSearch() {
  const { getUser, setGithubState } = useGithub();
  const [user, setUser] = useState('');

  const submitSearch = () => {
    if(!user) {
      setGithubState((oldState) => ({
      ...oldState,
      hasUser: false
    }))
    return;
  }
    return getUser(user);
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