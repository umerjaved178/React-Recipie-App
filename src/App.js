import './App.css';
import React, {useEffect, useState} from 'react'

import axios from "axios"
import Recipe from './component/Recipe';


function App() {

  const [searchResult, setsearchResult] = useState([])
  const [formInput, setformInput] = useState("")
  const [searchQuery, setsearchQeury] = useState("chicken")
  

  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
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
      <div className="recipes">
        {searchResult.map(singleRecipe => 
                        <Recipe key={singleRecipe.recipe.label} title={singleRecipe.recipe.label} calories={singleRecipe.recipe.calories} image={singleRecipe.recipe.image} ingredients={singleRecipe.recipe.ingredients}/>
        )}
      </div>
    </div>
  );
}


export default App;
