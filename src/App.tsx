import { ThemeProvider } from "styled-components";
import { ShoppinCartProvider } from "./Context/ShoppingCart";

import Home from './Pages/home';

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ShoppinCartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </ShoppinCartProvider>
  );
}

export default App;
