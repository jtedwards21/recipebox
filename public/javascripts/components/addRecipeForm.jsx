import React from "react";

export default class AddRecipeForm extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <form>
	      <div className="form-group">
		<label>Name</label>
	        <input id="recipe-name" value={this.props.recipeName} onChange={this.props.handleNameChange} className="form-control" placeholder="Name" type="text"/>
	      </div>
	      {this.props.ingredients}
	      <button className="btn btn-default" onClick={this.props.addRecipe}>Add</button>
	    </form>
    );
  }
}
