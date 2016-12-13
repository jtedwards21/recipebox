import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import Menu from "./menu";
import SingleRecipe from "./singleRecipe"
import AddRecipeForm from "./addRecipeForm"

export default class Box extends React.Component {
  constructor() {
    super();

    this.state = {
      currentRecipe: {},
      recipes: [],
　　　　　　showAdd: false,
      recipeName: "",
      ingredients: [],
      boxState: "menu"
    };
  }
  addRecipe(){
    console.log('add');
    var recipes = this.state.recipes.slice();
    var newR = {};
    newR.name = this.state.recipeName;
    newR.ingredients = this.state.ingredients;
    newR.number = this.state.recipes.length;
    recipes.push(newR);
    recipes = recipes.slice();
    this.setState({recipes: recipes, recipeName: '', ingredients: [], showAdd: false});
  }
  componentDidMount() {
	this.setState({ingredients: ["",""]})
  }
  toggleAddRecipe() {
    if(this.state.showAdd == true){
      //Hide with JQ
      this.setState(showAdd: false);
    } else {
      //Show with JQ
      this.setState(showAdd: true);
    }
  }
  handleNameChange(text) {
    var oldState = this.state.recipeName;
    var newState = oldState + text
    this.setState({recipeName: newState})
    console.log(this.state.recipeName);
  }
  addIngredient(){
        console.log('pushed');
	var recipeIngredients = this.state.ingredients.slice();
	recipeIngredients.push("");
	this.setState({ingredients: recipeIngredients});
  }
  closeSingleRecipe(){
	this.setState({currentRecipe: {}, boxState: "menu"});
  }
  render() {
    //Put recipes in a bootstrap table
    //Table should include a delete button
   
    var recipes = this.state.recipes.map(function(r, i){
	  var deleteRecipe = function(e){
	    //Delete The Recipe
	    var front = this.state.recipes.slice(0,i);
            var back = this.state.recipes(i+1);
	    var newRecipes = front.concat(back);
	    this.setState({recipes:newRecipes});
	  }
	  
	  var handleView = function(e){
	    this.setState({currentRecipe: this.state.recipes[i], boxState: "singleRecipe"});
	  }

	<Recipe　key={i} name={r.name} handleView={handleView} handleDelete={deleteRecipe} ingredients={r.ingredients} id={i}/>
})
    var ingredients = this.state.ingredients.map(function(r, i){
	  var handleChange = function(e){
	     var ing = this.state.ingredients.slice();
	     ing[i] = e.target.value;
	     this.setState({ingredients: ing});
          }
	//Dynamically set the value to connect to parent
	<Ingredient key={i} value={this.state.ingredients[i]} handleChange={handleChange} />
})
    var buttonText = (this.showAdd) ? "Hide" : "Add a Recipe";

    var singleRecipe = <SingleRecipe closeSingleRecipe={this.closeSingleRecipe.bind(this)} currentRecipe={this.state.currentRecipe} />
    var menu = <Menu addIngredient={this.addIngredient.bind(this)} buttonText={buttonText} toggleAddRecipe={this.toggleAddRecipe.bind(this)} recipes={this.state.recipes} />
    var addRecipeForm = <AddRecipeForm handleChange={this.handleNameChange.bind(this)} ingredients={ingredients} addRecipe={this.addRecipe.bind(this)} />
	console.log('d');

    return (
	<div>
          {singleRecipe}
	  {menu}
          {addRecipeForm}
	</div>
	
    );
  }
}
