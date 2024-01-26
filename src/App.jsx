import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from './foods.json'
import { useState } from "react";

function App() {

  const [foods, setFoods] = useState(foodsJson)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox foods={foods} setFoods={setFoods}></FoodBox>
    </div>
  );
}

export default App;
