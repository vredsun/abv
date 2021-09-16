import toNumber from 'lodash/toNumber';
import React, { useMemo, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [Imin, setImin] = useState<string | undefined>('');
  const [Imax, setImax] = useState<string | undefined>('');

  console.log({ iMin: Imin, iMax: Imax })

  const value = useMemo(
    () => {
      if (Imin && Imax) {
        const IminNumber = toNumber(Imin);
        const ImaxNumber = toNumber(Imax);

        return (ImaxNumber - IminNumber) / (ImaxNumber + IminNumber)
      }

      return '';
    },
    [Imin, Imax],
  );

  return (
    <div className="App">
      <div>
        <label>
          iMin
          <input id="iMin" type="number" value={Imin} onChange={e => setImin(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          iMax
          <input id="iMax" type="number" value={Imax} onChange={e => setImax(e.target.value)}/>
        </label>
      </div>
      <div>
        <label>
          result
          <input id="result" type="number" disabled value={value}/>
        </label>
      </div>
    </div>
  );
}

export default App;
