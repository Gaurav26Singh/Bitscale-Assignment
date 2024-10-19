import React from 'react';
import './App.css'
import Trial from './components/Trial';
import Enterprise from './components/Enterprise';
import Growth from './components/Growth';
import Booster from './components/Booster';

const App = () => {
  return (
    <div>
      <div className="func">
        <div id="monthly">
          <button>Monthly</button>
        </div>
        <div id="yearly">
          <button>Yearly</button>
        </div>
      </div>
      <div className="catalog">
      <Trial/>
      <Growth/>
      <Booster/>
      <Enterprise/>

      </div>
    </div>
  )
}

export default App
