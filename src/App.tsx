import { ThemeProvider } from "styled-components";
import Banner from "./components/Banner";
import Header from "./components/Header";
import SectionIllustration from "./components/SectionIllustration";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Banner />
      <SectionIllustration />
    </ThemeProvider>
  );
}

export default App;
