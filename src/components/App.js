import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      data: recipes.results,
    };

    this.recipes = recipes.results;
  }

  filterRecipe = (searchString) => {

    const newData = this.recipes.filter((item) => {
      const itemData = `${item.title.toUpperCase()} ${item.ingredients.toUpperCase()}`;
      const textData = searchString.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ searchString, data: newData });
  }

  applyHiglight(text, higlight) {
    if(higlight.length > 0) {
      var parts = text.split(new RegExp(`(${higlight})`, 'gi'));
      return <span>{parts.map((part, index) => part.toLowerCase() === higlight.toLowerCase() ? <mark key={index}>{part}</mark> : part)}</span>;
    }
    return text;
}

  render() {
    const { searchString, data } = this.state;
    return (
      <div className="App">
        <Navbar filter={this.filterRecipe} searchString={searchString} />
        <div className="container mt-10">
          <div className="row">
            {data.length > 0 ? data.map((recipe, index) => 
              <RecipeItem recipe={recipe} higlight={this.applyHiglight} searchString={searchString} key={index} />) 
              : <h1>No results to show</h1>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
