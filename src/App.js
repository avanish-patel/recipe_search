import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_TOKEN = "60104ba8148498a3606b6a39fa50861a";

class App extends Component {

  state = {
    recipes : []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_TOKEN}&q=${recipeName}`);
    const data = await api_call.json();

    this.setState({recipes: data.recipes});

    console.log(this.state.recipes);
  }
  render() {
    return (
      <div>
        <h1 className="main-title">Recipe Search</h1>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
