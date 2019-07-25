import React, {Component} from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron"
import ImgCard from "./components/ImgCard/ImgCard"


class App extends Component {
  state = {
    clicked: false,
    clickMatch: 0
  }
  render() {
    return (
      <div>
      <Jumbotron />


      </div>
    )
  }

}

export default App;
