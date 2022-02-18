import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import TodayFood from './components/TodayFood';


function App() {

  const [foodsArray, setFoods] = useState(foods);
  const [foodsArrayCopy, setFoodsArrayCopy] = useState(foods);
  const [checkoutData, setCheckout] = useState([]);

  function handleSubmit(event) {
    event.preventDefault()

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }
    setFoods([newFood, ...foodsArray])
  }

  function handleClick(food, quantity){
    let checkoutInf = {
      name: food.name,
      quantity: quantity,
      calories: food.calories
    }
    setCheckout([checkoutInf, ...checkoutData])
  }

  function handleSearch(event){
    let filteredFood = foodsArray.filter((element) => {
      return element.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFoodsArrayCopy(filteredFood)
  }

  return (
    <div>
      <SearchFood handleSearch={handleSearch} />

      {foodsArrayCopy.map((element, i) => {
        return <FoodBox
          food={element}
          key={i}
          buttonClick={handleClick}
        />
      })}

      <AddFood handleSubmit={handleSubmit} />
      <TodayFood items={checkoutData} />
    </div>
  );
}

export default App;