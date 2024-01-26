import "./App.css";

import Foodlist from "./components/Foodlist";
import foodsJson from './foods.json'
import { useState } from "react";

function App() {

  const [foods, setFoods] = useState(foodsJson)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Foodlist foods={foods} setFoods={setFoods}></Foodlist>
    </div>
  );
}

export default App;
