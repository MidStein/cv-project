import React from 'react';
import GenInfoSec from './components/GenInfoSec';
import EduExpSec from './components/EduExpSec';
import PracExpSec from './components/PracExpSec';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <GenInfoSec/>
        <div className='horizontal-rule'></div>
        <EduExpSec/>
        <PracExpSec/>
      </div>
    );
  }
}

export default App;
