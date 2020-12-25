import React from 'react'
import classes from "./Recipe.module.css"

function Recipe(props) {
    return (
        <div className={classes.recipe}>
            <h1>{props.title}</h1>
            <p> <b>Calories: </b>{props.calories.toFixed(0)}</p>
            <ul>
                {props.ingredients.map((ingredient, index) => 
                    <li key={index}>{ingredient.text}</li>  )}
            </ul>
            <img className={classes.image} src={props.image} alt="" />
        </div>
    )
}

export default Recipe
