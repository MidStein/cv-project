import React from 'react';
import GenInfoSec from './components/GenInfoSec';
import EduExpSec from './components/EduExpSec';
import PracExpSec from './components/PracExpSec';
import './styles/App.css';

const App = () => {
  return (
    <div className="container">
      <GenInfoSec />
      <div className='horizontal-rule'></div>
      <EduExpSec />
      <PracExpSec />
    </div>
  )
}

export default App;
