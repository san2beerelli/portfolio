import React, { Component } from "react";
import { Header } from "../components";
import Intro from "./Intro";

class App extends Component {
  render() {
    return (
      <div>
        <Header>App</Header>
        <Intro />
      </div>
    );
  }
}

export default App;
