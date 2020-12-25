import './App.css';
import React, {Component} from 'react'

import axios from "axios"
import Recipe from './component/Recipe';


export class App extends Component  {
  constructor(props) {
    super(props)
  
    this.state = {
      searchResult: [],
      formInput: "",
      searchQuery: "chicken",
    }
  }
  

  componentDidMount() {
    axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
            .then(res=>  
                this.setState({searchResult: res.data.hits}))
    // console.log("componentDidMount: ", this.state.searchQuery)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.searchQuery === this.state.searchQuery) return false
    axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
            .then(res=>  
              this.setState({searchResult: res.data.hits}))
    // console.log("componentDidUpdate: ", this.state.searchQuery)
  }

  onChangeHandler = (e) => {
    this.setState({
      formInput: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searchQuery: this.state.formInput
    })
  }


  render() {
    return (
      <div className="App">
        <form className="search-form" onSubmit={this.onSubmitHandler}>
          <input className="search-bar" type="text" onChange={this.onChangeHandler} />
          <button className="search-button" type="submit">SEARCH</button>
        </form>
        <div className="recipes">
          {this.state.searchResult.map((singleRecipe, index) => 
                          <Recipe key={index} title={singleRecipe.recipe.label} calories={singleRecipe.recipe.calories} image={singleRecipe.recipe.image} ingredients={singleRecipe.recipe.ingredients}/>
          )}
        </div>
      </div>
    );
  }
}


export default App;


