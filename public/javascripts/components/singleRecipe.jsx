import React from "react";

export default class SingleRecipe extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
	<div className="single-recipe">
	    <div className="recipe-title">{this.props.currentRecipe.name}</div>
	    <div className="recipe-ingredients">{this.props.currentRecipe.ingredients}</div>
	  </div>
    );
  }
}
