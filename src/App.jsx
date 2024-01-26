import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from './foods.json'
import { useState } from "react";

function App() {

  const [foods, setFoods] = useState(foodsJson)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods}></AddFoodForm>
      <FoodBox foods={foods} setFoods={setFoods}></FoodBox>
    </div>
  );
}

export default App;
