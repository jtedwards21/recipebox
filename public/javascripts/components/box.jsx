import React from "react";
import JQuery from "jquery";
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
    var recipes = this.state.recipes.slice();
    var newR = {};
    newR.name = this.state.recipeName;
    newR.ingredients = this.state.ingredients;
    newR.number = this.state.recipes.length;
    recipes.push(newR);
    recipes = recipes.slice();
    JQuery(".add-recipe-form").hide("slow");
    this.setState({recipes: recipes, recipeName: '', ingredients: [], showAdd: false});
  }
  toggleAddRecipe() {
    if(this.state.showAdd == true){
      //Hide with JQ
      JQuery(".add-recipe-form").hide("slow");
      this.setState(showAdd: false);
    } else {
      //Show with JQ
      JQuery(".add-recipe-form").show("slow");
      this.setState(showAdd: true);
    }
  }
  handleNameChange(e) {
    this.setState({recipeName: e.target.value})
  }
  addIngredient(){
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
	    this.setState(recipes:newRecipes);
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

    var singleRecipe = <SingleRecipe closeSingleRecipe={this.closeSingleRecipe} currentRecipe={this.state.currentRecipe} />
    var menu = <Menu toggleAddRecipe={this.toggleAddRecipe} recipes={recipes} />
    var addRecipeForm = <AddRecipeForm recipeName={this.state.recipeName} handleNameChange={this.handleNameChange} ingredients={ingredients} addRecipe={this.addRecipe} />

    return (
	<div>
          {singleRecipe}
	  {menu}
          {addRecipeForm}
	</div>
	
    );
  }
}
