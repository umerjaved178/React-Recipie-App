import './App.css';
import React, {useEffect, useState} from 'react'

import axios from "axios"
import Recipe from './component/Recipe';


function App() {
  const APP_ID = "86b22245"
  const APP_KEY = "14ed0dc21303c1b51cd3396f0054f53e"

  const [searchResult, setsearchResult] = useState([])
  const [formInput, setformInput] = useState("")
  const [searchQuery, setsearchQeury] = useState("chicken")
  

  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
          .then(res=>setsearchResult(res.data.hits))
  }, [searchQuery])

  const onChangeHandler = (e) => {
    setformInput(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setsearchQeury(formInput)
    setformInput("")
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={onSubmitHandler}>
        <input className="search-bar" type="text" onChange={onChangeHandler} />
        <button className="search-button" type="submit">SEARCH</button>
      </form>

      {searchResult.map(singleRecipe => 
                      <Recipe key={singleRecipe.recipe.label} title={singleRecipe.recipe.label} calories={singleRecipe.recipe.calories} image={singleRecipe.recipe.image} ingredients={singleRecipe.recipe.ingredients}/>
      )}
    </div>
  );
}


export default App;
