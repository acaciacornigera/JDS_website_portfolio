import React from 'react';

import { About, Footer, Header, Skills, Experiences, Works } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Experiences />
    <Works />
    <Footer />
  </div>
);

export default App;
