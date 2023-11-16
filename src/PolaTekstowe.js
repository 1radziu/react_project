import React, { useState } from 'react';

const TextFieldsDisplay = () => {
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');
  const [textValue3, setTextValue3] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);
  const [info, setInfo] = useState('');

  const Pole1 = (event) => {
    setTextValue1(event.target.value);
  };

  const Pole2 = (event) => {
    setTextValue2(event.target.value);
  };

  const Pole3 = (event) => {
    setTextValue3(event.target.value);
  };

  const Informacje = () => {
    const infoToShow = `Imię:  ${textValue1}\n Nazwisko: ${textValue2}\n gmail:  ${textValue3}`;
    setInfo(infoToShow);
    setDisplayInfo(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
        <p>Podaj Imię: </p>
      <input
        type="text"
        value={textValue1}
        onChange={Pole1}
        placeholder="Pole tekstowe 1"
        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <p>Podaj Nazwisko: </p>
      <input
        type="text"
        value={textValue2}
        onChange={Pole2}
        placeholder="Pole tekstowe 2"
        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <p>Podaj Gmail: </p>
      <input
        type="text"
        value={textValue3}
        onChange={Pole3}
        placeholder="Pole tekstowe 3"
        style={{ marginBottom: '20px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button onClick={Informacje} style={{ padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
        Wyświetl informacje
      </button>
      {displayInfo && (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <h3>Informacje:</h3>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
};

export default TextFieldsDisplay;
