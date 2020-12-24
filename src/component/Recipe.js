import React from 'react'

function Recipe(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Calories: {props.calories.toFixed(0)}</p>
            <ul>
                {props.ingredients.map(ingredient => 
                    <li key={ingredient.text}>{ingredient.text}</li>  )}
            </ul>
            <img src={props.image} alt="" />
        </div>
    )
}

export default Recipe
