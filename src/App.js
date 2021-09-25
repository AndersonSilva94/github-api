import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GithubProvider from './context/GithubProvider';
import Home from './pages/Home';
import dark from './themes/dark';
import light from './themes/light';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </GithubProvider>
  );
}

export default App;
