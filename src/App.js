import './App.css';
import React, {Component, useEffect, useState} from 'react'

import axios from "axios"
import Recipe from './component/Recipe';


export class App extends Component  {
  constructor(props) {
    super(props)
  
    this.state = {
      searchResult: [],
      formInput: "",
      searchQuery: "chicken",
      APP_ID: "86b22245",
  APP_KEY: "14ed0dc21303c1b51cd3396f0054f53e"
    }
  }
  

  

  // const [searchResult, setsearchResult] = useState([])
  // const [formInput, setformInput] = useState("")
  // const [searchQuery, setsearchQeury] = useState("chicken")
  

  // useEffect(() => {
  //   axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //         .then(res=>setsearchResult(res.data.hits))
  // }, [searchQuery])

  // componentDidMount() {
  //   axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}`)
  //   .then(res=>  
  //     this.setState(prevState =>({searchResult: prevState.searchResult.concat(res.data.hits)}))
  //     )
  // }

  componentDidUpdate(){
    axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}`)
            .then(res=>  
              this.setState(prevState =>({searchResult: prevState.searchResult.concat(res.data.hits)}))
              )
  }

  onChangeHandler = (e) => {
    this.setState({
      formInput: e.target.value
    })
    console.log(e.target.value)
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searchQuery: this.state.formInput
    })
    // console.log(this.state.searchQuery)
    
    // setformInput("")
  }
  render() {
    return (
      <div className="App">
        <form className="search-form" onSubmit={this.onSubmitHandler}>
          <input className="search-bar" type="text" onChange={this.onChangeHandler} />
          <button className="search-button" type="submit">SEARCH</button>
        </form>
        <div className="recipes">
          {this.state.searchResult.map(singleRecipe => 
                          <Recipe key={singleRecipe.recipe.label} title={singleRecipe.recipe.label} calories={singleRecipe.recipe.calories} image={singleRecipe.recipe.image} ingredients={singleRecipe.recipe.ingredients}/>
          )}
        </div>
      </div>
    );
  }
}


export default App;


