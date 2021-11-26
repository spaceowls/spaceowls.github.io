import React from 'react';
import Footer from './components/Footer';

import Contact from './components/pages/Contact';
import Members from './components/pages/Members';
import GalaxyPortifolio from './components/GalaxyPortifolio'

function App() {
  return (
    <>
      <Members />
      <GalaxyPortifolio/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
