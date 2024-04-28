import React from "react";

import { Navbar } from "./components";
import Header from "./container/Header/Header.jsx";
import "./App.css";
import FindUs from "./container/Findus/FindUs.jsx";
import AboutUs from "./container/AboutUs/AboutUs.jsx";
import SpecialMenu from "./container/Menu/SpecialMenu.jsx";
import Chef from "./container/Chef/Chef.jsx";
import Intro from "./container/Intro/Intro.jsx";
import Laurels from "./container/Laurels/Laurels.jsx";
import Gallery from "./container/Gallery/Gallery.jsx";
import Footer from "./container/Footer/Footer.jsx";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton.jsx";

const App = () => (
  <>
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
      <ScrollUpButton />
  </>
);

export default App;
