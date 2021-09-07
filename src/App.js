import React from 'react';
import GeneralArea from './components/GeneralArea';
import InputSearch from './components/InputSearch';
import GithubProvider from './context/GithubProvider';

function App() {
  return (
    <GithubProvider>
      <InputSearch />
      <GeneralArea />
    </GithubProvider>
  );
}

export default App;
