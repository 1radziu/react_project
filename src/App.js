

import React from 'react';
import ColorChanger from './ColorChanger'; 
import PolaTekstowe from './PolaTekstowe'; 

const App = () => {
  return (
    <div className="App">
      <h2>Przycisk zmieniający kolor strony </h2>
      <ColorChanger /> 

      <PolaTekstowe /> 

    </div>
  );
};

export default App;
