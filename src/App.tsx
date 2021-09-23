import { ThemeProvider } from "styled-components";

import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import SectionCategories from "./components/SectionCategories";
import SectionIllustration from "./components/SectionIllustration";
import SlideContainer from "./components/SlideContainer";

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Banner />
      <SectionIllustration />
      <SectionCategories />
      <SlideContainer>
        <Cards 
          img='https://imgur.com/Ns4nmWq.jpg'
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img='https://imgur.com/Ns4nmWq.jpg'
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img='https://imgur.com/Ns4nmWq.jpg'
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img='https://imgur.com/Ns4nmWq.jpg'
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img="https://i.imgur.com/ACPurpb.jpg"
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img="https://i.imgur.com/ACPurpb.jpg"
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
        <Cards 
          img="https://i.imgur.com/ACPurpb.jpg"
          name='Smartphone Samsung GalaxyA11 64GB Tela 6.4 3GB RAM'
          stars={3}
          currentPrice={'1068.99'}
          oldPrice={'257,00'}
          discount={15}
        />
      </SlideContainer>
      <Newsletter />
    </ThemeProvider>
  );
}

export default App;
