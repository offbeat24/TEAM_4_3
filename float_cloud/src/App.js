import Router from './Router';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import AddComment from './components/AddComment';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Router /> */}
      <AddComment />
    </ThemeProvider>
  );
}

export default App;
