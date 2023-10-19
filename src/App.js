import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT3,
  Header,
} from "./cantainers";
import { CTA, Brand, Navbar } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  );
};

export default App;
