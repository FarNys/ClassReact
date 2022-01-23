import React, { Component } from "react";
import FetchData from "./FetchData";
import Single from "./Single";
import "./style.css";
import AddCount from "./AddCount";
import ShowCount from "./ShowCount";
import GridContainer from "./GridContainer";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      checkUnmount: true,
      currItem: {
        txt: "",
        key: "",
      },
    };
    //SOMETIMES CANT RECOGNIZE THIS (MAYBE WHEN WE PROPS TO LOWER COMPONENTS!)
    this.deleteItem = this.deleteItem.bind(this);
    //TOP ACTION WILL FIX THAT!
  }
  changeInput(el) {
    this.setState({
      currItem: {
        txt: el,
        key: Date.now(),
      },
    });
    // console.log(this.state.currItem);
  }
  addItem(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      allItems: [...this.state.allItems, this.state.currItem],
      currItem: {
        txt: "",
        key: "",
      },
    });
    // console.log(this.state);
  }
  deleteItem(id) {
    this.setState({
      ...this.state,
      allItems: [...this.state.allItems.filter((el) => el.key !== id)],
    });
    // console.log(this.state);
  }
  unmountComp() {
    this.setState({
      ...this.state,
      checkUnmount: !this.state.checkUnmount,
    });
    // console.log(this.state.checkUnmount);
  }

  render() {
    return (
      <div className="app_container">
        <h1>This is App</h1>
        <button onClick={() => this.unmountComp()}>Unmount</button>
        <div
          className="form_container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>ToDo</h3>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Add here . . ."
              value={this.state.currItem.txt}
              onChange={(e) => this.changeInput(e.target.value)}
            />
            <button onClick={(e) => this.addItem(e)}>ADD</button>
          </div>
          {this.state.allItems.length > 0 && (
            <div className="all">
              {this.state.allItems.map((el) => (
                <Single key={el.key} el={el} deleteItem={this.deleteItem} />
              ))}
            </div>
          )}
        </div>
        {/* {this.state.checkUnmount ? <FetchData /> : null} */}
        <AddCount />
        <ShowCount />
        <GridContainer />
      </div>
    );
  }
}
