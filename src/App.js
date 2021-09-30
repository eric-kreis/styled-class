import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MyPage } from './MyPage';
import { GlobalStyle } from './styles/global';
import green from './themes/green';

function App() {
  const [themeStatus, setThemeStatus] = useState('light');

  const toggleTheme = () => {
    setThemeStatus((title) => title === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={green[themeStatus]}>
      <GlobalStyle />
      <MyPage toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
