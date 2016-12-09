import React from "react";

export default class Recipe extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
	//Render a line from a table
    return (
      <tr>
	<th>this.props.id</th>
	<td>this.props.name</td>
        <td><span className="view-button"onClick={this.props.handleView} >u</span></td>
	<td><span className="delete-button" onClick={this.props.handleDelete} >x</span></td>
	<td>this.props.ingredients</td>
      </tr>
    );
  }
}
