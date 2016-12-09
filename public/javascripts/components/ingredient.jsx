import React from "react";

export default class Ingredient extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
	//Render a form-group
    return (
	<div className="form-group">
	  <label>{this.props.id}</label>
	  <input id="recipe-name" value={this.props.childValue} onChange={this.props.handleChange} className="form-control" placeholder="Ingredient" type="text" />
	</div>
    );
  }
}
