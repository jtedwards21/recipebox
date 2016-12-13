import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import Menu from "./menu";
import SingleRecipe from "./singleRecipe"

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
    console.log(newR);
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
  handleChange(e){
	     var ing = this.state.ingredients.slice();
	     ing[i] = e.target.value;
	     this.setState({ingredients: ing});
          }
  handleNameChange(e) {
    console.log('called');
    var oldState = this.state.recipeName;
    var newState = e.target.value;
    this.setState({recipeName:  e.target.value})
  }
  addIngredient(){
        console.log('pushed');
	var recipeIngredients = this.state.ingredients.slice();
	recipeIngredients.push("");
        console.log(this.state.ingredients);
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

	return <Recipe　key={i} name={r.name} handleView={handleView} handleDelete={deleteRecipe} ingredients={r.ingredients} id={i}/>
})


    var ingredients = this.state.ingredients.map(function(r, i){
	  
	return <Ingredient key={i} value={this.state.ingredients[i]} handleChange={this.handleChange.bind(this)} />
    })

    ingredients.push(<Ingredient key={99} id={1} value={"hello"} handleChange={this.handleChange.bind(this)} />)

    var buttonText = (this.showAdd) ? "Hide" : "Add a Recipe";

    var singleRecipe = <SingleRecipe closeSingleRecipe={this.closeSingleRecipe.bind(this)} currentRecipe={this.state.currentRecipe} />
    var menu = <Menu addIngredient={this.addIngredient.bind(this)} buttonText={buttonText} toggleAddRecipe={this.toggleAddRecipe.bind(this)} recipes={recipes} />
    console.log(ingredients);

    return (
	<div className="row">
	  <div className="col-md-6 col-md-offset-3">
          <form className="form-horizontal">
	      <div className="form-group">
		<label className="col-md-2">Name</label>
	        <div className="col-md-10">
	          <input id="recipe-name" value={this.state.recipeName} onChange={this.handleNameChange.bind(this)} className="form-control" placeholder="Name" type="text"/>
	        </div>
	      </div>
	      {ingredients}
	      <div className="form-group">
		<div className="col-md-2 col-md-offset-4">
	          <div className="btn btn-default" onClick={this.addRecipe.bind(this)}>Add</div>
		</div>
		<div className="col-md-2">
                  <div className="btn btn-default" onClick={this.addIngredient.bind(this)}>Add Ingredient</div>
		</div>
	      </div>
	    </form>
          {singleRecipe}
	  {menu}
	  </div>
	</div>
	
    );
  }
}
