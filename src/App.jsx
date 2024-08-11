import { GlobalStyle } from "./GlobalStyles";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import FuniroFurniture from "./components/FuniroFurniture/FuniroFurniture";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import OurTricks from "./components/OurTricks/OurTricks";
import Products from "./components/Products/Products";


function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Products />
      <Gallery />
      <OurTricks />
      <FuniroFurniture />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
