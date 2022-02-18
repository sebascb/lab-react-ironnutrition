import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';


function App() {
  return (
    <div>
      <FoodBox data={foods} />

    </div>
  );
}

export default App;