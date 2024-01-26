import React from "react";

function FoodBox(props) {
  function deleteFood(foodId) {
    // const foodsAfterDelete = [...props.foods] it does not work this way!!
    const foodsAfterDelete = props.foods.filter((food) => {
      return food.id !== foodId;
    });

    props.setFoods(foodsAfterDelete);
  }

  return (
    <div>
      {props.foods.map((food) => {
        return (
          <div key={food.id}>
            <p>{food.name}</p>
            <img src={food.image} width="200"></img>

            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings} </p>

            <p>
              <b>Total Calories: {food.servings * food.calories}</b> kcal
            </p>

            <button
              onClick={() => {
                deleteFood(food.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodBox;
