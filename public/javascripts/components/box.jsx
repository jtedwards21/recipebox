import React from "react";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import Menu from "./menu";
import SingleRecipe from "./singleRecipe"

export default class Box extends React.Component {
  constructor() {
    super();
    var initialIngredient = {name: "nothing", id:0}

    this.state = {
      currentRecipe: {},
      recipes: [],
　　　　　　showAdd: false,
      recipeName: "Add a name",
      ingredients: [initialIngredient],
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
    var oldState = this.state.recipeName;
    var newState = e.target.value;
    this.setState({recipeName:  e.target.value})
  }
  addIngredient(){
	var recipeIngredients = this.state.ingredients.slice();
	recipeIngredients.push({name:"nothing", id:this.state.ingredients.length});
        console.log(this.state.ingredients);
	this.setState({ingredients: recipeIngredients});
  }
  closeSingleRecipe(){
	this.setState({currentRecipe: {}, boxState: "menu"});
  }
  makeDeleteFunction(i){
    return function(e){
      var front = this.state.recipes.slice(0,i);
      var back = this.state.recipes(i+1);
      var newRecipes = front.concat(back);
      this.setState({recipes:newRecipes});
    }
  }
  makeHandleViewFunction(i){
    return function(e){
       this.setState({currentRecipe: this.state.recipes[i], boxState: "singleRecipe"});
    }
  }
  render() {
   
    var recipes = this.state.recipes.map(function(r, i){
	  var deleteRecipe = this.makeDeleteFunction(i);
	  
	  var handleView = this.makeHandleViewFunction(i);

	return <Recipe　key={i} name={r.name} handleView={handleView.bind(this)} handleDelete={deleteRecipe.bind(this)} ingredients={r.ingredients} id={i}/>
})

    console.log(recipes);

    var ingredients = []

    for(var i = 0; i < this.state.ingredients.length; i++){
      ingredients.push(<Ingredient key={this.state.ingredients[i].id} id={0} value={this.state.ingredients[i].name} handleChange={this.handleChange} />)
    }

    var buttonText = (this.showAdd) ? "Hide" : "Add a Recipe";

    var singleRecipe = <SingleRecipe closeSingleRecipe={this.closeSingleRecipe.bind(this)} currentRecipe={this.state.currentRecipe} />
    var menu = <Menu addIngredient={this.addIngredient.bind(this)} buttonText={buttonText} toggleAddRecipe={this.toggleAddRecipe.bind(this)} recipes={recipes} />
    

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
