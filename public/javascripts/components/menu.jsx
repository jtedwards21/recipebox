import React from "react";

export default class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
	//Render a line from a table
    return (
      　　<div　className="menu">
	  <table className="table">
	    <thead></thead>
	      <tbody>
                {this.props.recipes}
	      </tbody>
	  </table>
	  <div className="btn btn-large btn-default" onClick={this.props.toggleAddRecipe}>
	    {this.props.buttonText}
	  </div>
	</div>
    );
  }
}


