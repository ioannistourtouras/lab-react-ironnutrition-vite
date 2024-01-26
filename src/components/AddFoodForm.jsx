import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'


function AddFoodForm(props) {

    const [foodName, setFoodName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()

        const newFood = {name: foodName, image: image, calories: calories, servings: servings}
        
        const foodsWithNewAdd = [newFood, ...props.foods]
        props.setFoods(foodsWithNewAdd)

        setFoodName("")
        setImage("")


    }

  return (
    <div className='AddFoodForm'>
    <form onSubmit={handleSubmit}>
        <label>
            Name
            <input name="name" type="text" onChange={(e)=>{setFoodName(e.target.value)}} value={foodName} />
        </label>
        <label>
            Image
            <input name="image" type="text" onChange={(e)=>{setImage(e.target.value)}} value={image} />
        </label>
        <label>
            Calories
            <input name="calories" type="number" onChange={(e)=>{setCalories(e.target.value)}} value={calories}/>
        </label>
        <label>
            Servings
            <input name="servings" type="number" onChange={(e)=>{setServings(e.target.value)}} value={servings} />
        </label>
        <button>Create</button>
    </form>
</div>
)

}

export default AddFoodForm;
