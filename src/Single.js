import React, { Component } from "react";
import "./style.css";
export default class Single extends Component {
  render() {
    return (
      <div className="single_line">
        <span>{this.props.el.txt}</span>
        <button onClick={() => this.props.deleteItem(this.props.el.key)}>
          Delete
        </button>
      </div>
    );
  }
}
