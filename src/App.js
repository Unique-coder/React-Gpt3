// Import components from './components' folder
import { Brand, CTA, Navbar } from "./components";

// Import components from './container' folder
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <h1>GPT-3</h1>
    </div>
  );
};

export default App;
