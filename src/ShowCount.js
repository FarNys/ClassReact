import React, { Component } from "react";
import { connect } from "react-redux";

class ShowCount extends Component {
  render() {
    return <div>This is Show Count {this.props.numItem}</div>;
  }
}

const mapStateToProps = (state) => ({
  numItem: state.reducer.number,
});

export default connect(mapStateToProps, null)(ShowCount);
