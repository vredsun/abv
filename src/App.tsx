import React, { useMemo, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [iMin, setIMin] = useState<string | undefined>(undefined);
  const [iMax, setIMax] = useState<string | undefined>(undefined);

  const value = useMemo(
    () => {
      if (iMin && iMax) {
        // @ts-expect-error bad types
        return (iMin - iMax) / (iMin + iMax )
      }

      return undefined;
    },
    [iMin, iMax],
  );

  return (
    <div className="App">
      <div>
        <label htmlFor="iMin">iMin</label>
        <input id="iMin" value={iMin} onChange={e => setIMin(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="iMax">iMax</label>
        <input id="iMax" value={iMax} onChange={e => setIMax(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="result">result</label>
        <input id="result" disabled value={value}/>
      </div>
    </div>
  );
}

export default App;
