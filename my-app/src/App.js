import React, {Component} from "react";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import CardContainer from "./components/CardContainer/CardContainer"
import ImgCard from "./components/ImgCard/ImgCard";
import Beaches from "./beaches.json";

class App extends Component {
  state = {
    beaches: Beaches,
    score: 0,
    topScore: 0
  }


  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>

        <Jumbotron />


            <ImgCard beaches={Beaches}></ImgCard>


      


      </div>
    );
  };

};

export default App;
