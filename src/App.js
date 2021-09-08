import React from 'react';
import { ThemeProvider } from 'styled-components';
import GeneralArea from './components/GeneralArea';
import InputSearch from './components/InputSearch';
import GithubProvider from './context/GithubProvider';
import theme from './theme';

function App() {
  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <InputSearch />
        <GeneralArea />
      </ThemeProvider>
    </GithubProvider>
  );
}

export default App;
