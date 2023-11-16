import ExtensionRouter from './Router';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ExtensionRouter />
    </ThemeProvider>
  );
}

export default App;
