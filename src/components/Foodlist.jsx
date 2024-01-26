import React from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

function Foodlist(props) {
  return (
    <div>
      <AddFoodForm foods={props.foods} setFoods={props.setFoods}></AddFoodForm>
      <FoodBox foods={props.foods} setFoods={props.setFoods}></FoodBox>
    </div>
  );
}

export default Foodlist;
