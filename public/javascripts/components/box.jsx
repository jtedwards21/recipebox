import React from "react";

export default class Box extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
　　　　　　showAdd: false
    };
  }
  toggleAddRecipe() {
    if(this.state.showAdd == true){
      //Hide with JQ
    } else {
      //Show with JQ
    }
  }
  render() {
    //Put recipes in a bootstrap table
    //Table should include a delete button
   
    var recipes = this.state.recipes.map(function(r, i){
	<Recipe　key={i} name={r.name} id={i}/>
})


    return (
      <div className="recipe-box">
        {recipes}
	<div className="btn btn-large btn-default" onClick={this.toggleAddRecipe}>{(this.showAdd) ? "Hide" : "Add a Recipe"}</div>
      </div>
    );
  }
  changeSearch(event) {
    var text = event.target.value;

    this.setState({
      search: text
    });
  }
}
