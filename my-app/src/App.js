import React, {Component} from "react";
import NavBar from "./components/NavBar/NavBar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import ImgCard from "./components/ImgCard/ImgCard"


class App extends Component {
  state = {
    clicked: false,
    clickMatch: 0,
    score: 0,
    topScore: 0
  }

  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />

      


      </div>
    )
  }

}

export default App;
