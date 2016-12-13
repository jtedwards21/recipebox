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
	  <label　className="col-md-2">Ingredient {this.props.id}</label>
	  <div className="col-md-10">
	    <input id="recipe-name" value={this.props.childValue} onChange={this.props.handleChange} className="form-control" placeholder="Ingredient" type="text" />
	  </div>
	</div>
    );
  }
}
