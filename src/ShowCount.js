import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount, decCount } from "./action";

class ShowCount extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  addCountToNumber() {
    this.props.addCount();
  }
  decreseHandler() {
    this.props.decCount(4);
  }
  render() {
    const { numItem } = this.props;
    return (
      <>
        <div>This is Show Count {numItem}</div>
        <button onClick={() => this.addCountToNumber()}>ADD Count</button>
        <button onClick={() => this.decreseHandler()}>Decrease</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  numItem: state.reducer.number,
});
// const getFunctions = () => {
//   return addCount;
// };

export default connect(mapStateToProps, { addCount, decCount })(ShowCount);
