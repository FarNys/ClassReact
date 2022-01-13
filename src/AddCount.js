import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount } from "./action";
import { PropTypes } from "prop-types";
class AddCount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addHandler() {
    this.props.addCount();
    console.log("ADD HANDLER CLICKED");
  }
  render() {
    return (
      <div>
        <h1>Add Count Part</h1>
        <button onClick={() => this.addHandler()}> Add +2</button>
      </div>
    );
  }
}

// AddCount.prototype={}
// AddCount.prototype = { addCount: PropTypes.func.isRequired };
export default connect(null, { addCount })(AddCount);
