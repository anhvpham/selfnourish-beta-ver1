import React, { Component } from "react";
import './css/Search.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchRecipe from "../parts/SearchRecipe";
import {Redirect} from "react-router-dom";

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchIngredient: '',
			selectedRecipeId: ''
    };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.suggestionClick = this.suggestionClick.bind(this);
		// create a ref to store the textInput DOM element
		this._name = React.createRef()
  
	}

	suggestionClick(event){
		this._name.value= event.target.value;
		this.setState({searchIngredient: event.target.value});
	}

  handleSubmit(event) {
		event.preventDefault();
		this.setState({searchIngredient: this._name.value});
  };

	// if user selected a recipe from the recipe list
	retrieveRecipe(id){
		if (id!==''){
			this.setState(
				{selectedRecipeId: id}
			);
		}

	}

  render() {

		if (this.state.selectedRecipeId!=='') {

			return <Redirect to={'/Recipes/single/'+this.state.selectedRecipeId+'/'+this.props.match.params.nutrientConstraints+'/'+ this.state.searchIngredient} />

		}

		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		
    return (
      <div className="search-wrapper">
				<form onSubmit={this.handleSubmit}>
					<div className="search-form-div">
						<div className="search-form-label heading-2">Search Recipes</div>
						<div className="search-field-container">
							<Icon path={mdiMagnify} size={1.5} rotate={90} color={"grey"}/>
							<input
								className="search-input"
								id = "ingredient" 
								name="currentIngredient"
								type="text"
								//value={this.state.searchIngredient}
								placeholder="Enter ingredient"
								ref={input => this._name = input}/>
						</div>
						<div className="search-button-div">
							<button className="search-button button-large button-orange"
									type="submit" name="action">Search</button>
						</div>
					</div>
				</form>
				<p className="what-ingredient-p">What ingredients you want to start with?</p>
				<div className="suggestions-div">
					<button className="button-suggestions" onClick={this.suggestionClick} value="Salmon">Salmon</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Egg">Egg</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Bacon">Bacon</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Seafood">Seafood</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Chicken">Chicken</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Mushroom">Mushroom</button>
					<button className="button-suggestions" onClick={this.suggestionClick} value="Broccoli">Broccoli</button>
				</div>
        <SearchRecipe
          title = {(this.state.searchIgredient==='')? "Popular Recipes" : "Recommended Recipes"}
					isGrouped = {true} //indicates if this section belongs to the same team of other elements on the page
          ingredient = {this.state.searchIngredient}
					nutrientConstraints = {this.props.match.params.nutrientConstraints}
					retrieveRecipe={this.retrieveRecipe.bind(this)}
        />
      </div>
    );
  }
}
 
export default Search;