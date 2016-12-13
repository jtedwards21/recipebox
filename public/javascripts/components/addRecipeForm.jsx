import React from "react";
import Ingredient from "./ingredient"

export default class AddRecipeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      display: ""
    };
  }
  handleChange(e) {
    console.log('change');
    var oldD = this.state.display;
    var newD = oldD + e.target.value;
    this.setState({display: newD})
    this.props.handleChange(newD);
  }
  render() {
    return (
      <form>
	      <div className="form-group">
		<label>Name</label>
	        <input id="recipe-name" value={this.state.display} onChange={this.handleChange} className="form-control" placeholder="Name" type="text"/>
	      </div>
              <div className="btn btn-default" onClick={this.props.addIngredient}>Add Ingredient</div>
	      {this.props.ingredients}
	      <div className="btn btn-default" onClick={this.props.addRecipe}>Add</div>
	    </form>
    );
  }
}
