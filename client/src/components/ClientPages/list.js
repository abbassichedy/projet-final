import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  componentDidMount = () => {
    axios
      .get("http://localhost:7008/api/profiles/")
      .then(res => console.log("the res:", res))
      .console.error("err");
  };

  render() {
    return <div>
        <h1>hello</h1>
    </div>;
  }
}

export default List