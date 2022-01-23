import React, { Component } from "react";
import { connect } from "react-redux";

class ShowCount extends Component {
  render() {
    const { numItem } = this.props;
    return <div>This is Show Count {numItem}</div>;
  }
}

const mapStateToProps = (state) => ({
  numItem: state.reducer.number,
});

export default connect(mapStateToProps, null)(ShowCount);
