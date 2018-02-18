import React, { Component } from "react";
import { Header, Background, Paper } from "../components";
import bg from "../resources/bannerbg.jpg";
import MediaQuery from "react-responsive";

class App extends Component {
  render() {
    return (
      <div>
        <Header>App</Header>
        <MediaQuery minWidth={769}>
          {matches => {
            let bgImage = null;
            if (matches) {
              bgImage = bg;
            }
            return <Background src={bgImage} />;
          }}
        </MediaQuery>
      </div>
    );
  }
}

export default App;
