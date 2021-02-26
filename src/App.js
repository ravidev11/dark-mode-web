import React from 'react';
import LightMode from './LightMode'
import { Toggle } from './Toggle';
import { DarkMode } from './DarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  max-width: 80%;
  margin: 8rem auto 0;
`;

function App() {
  const [ theme, toggleTheme ] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <LightMode />
      </Container>
    </ThemeProvider>
  );
}

export default App;