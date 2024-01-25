import { ReactElement } from 'react';
import GlobalStyle from './styles.ts';
import { ThemeProvider } from 'styled-components';
import Main from '@pages/Main';

const App = (): ReactElement => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);

export default App;
