import React, { Component } from "react";

export default class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBack: "",
      num: 0,
    };
  }

  check() {
    this.setState({ ...this.state, num: +this.state.num + 5 });
    console.log(this.state.num);
  }
  componentDidMount() {
    const getData = async () => {
      const res = await fetch(
        "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key":
              "1a6718770emsh2f3695f15ac9900p1dcf9djsn42038a44656c",
          },
        }
      );
      const data = await res.json();
      this.setState({ ...this.state, dataBack: data.data.splice(0, 5) });
      console.log(this.state);
    };

    getData();
    console.log("Check");
  }
  //   componentDidUpdate() {
  //     console.log("Update");
  //   }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <button onClick={() => this.check()}>Check</button>

        {this.state.dataBack.length > 0 ? (
          this.state.dataBack.map((el, id) => <li key={id}>{el.pres}</li>)
        ) : (
          <li>No Data</li>
        )}
      </div>
    );
  }
}
