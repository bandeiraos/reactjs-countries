import { useCallback, useState } from "react";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';
import Container from "./components/Container";
import { ITheme } from "./definitions/definitions";

function App() {

  const [selectedTheme, setSelectedTheme] = useState('light');

  const theme: ITheme = themes[selectedTheme];
  const isDarkTheme: boolean = selectedTheme === 'dark';

  const handleChangeTheme = useCallback(() => {
    setSelectedTheme(!isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onChangeTheme={handleChangeTheme} isDarkTheme={isDarkTheme} />
      <Container />
    </ThemeProvider>
  );
}

export default App;
