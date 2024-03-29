import React from 'react';
import './App.css';
import Toast from './components/atoms/Toast/Toast';
import Math from './components/organisms/Math/Math';
import MainPage from './components/pages/Main/Main';

function App() {
  const [toastData, changeToastData] = React.useState<{ text: string; timestamp: number } | null>(null);

  const addToast = (text: string): void => {
    changeToastData({
        text,
        timestamp: Date.now(),
      }
    )
  }

  return (
    <MainPage>
      <Toast toastData={toastData} handleCloseToast={() => changeToastData(null)} />
      <Math addToast={addToast} />
    </MainPage>
  );
}

export default App;
