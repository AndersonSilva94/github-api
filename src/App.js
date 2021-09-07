import React from 'react';
import InputSearch from './components/InputSearch';
import GithubProvider from './context/GithubProvider';

function App() {
  return (
    <GithubProvider>
      <InputSearch />
    </GithubProvider>
  );
}

export default App;
