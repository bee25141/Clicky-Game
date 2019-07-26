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
  };

  handleClick = id => {

    let itemBeach = this.state.beaches.find(obj => obj.id === id)

    if (itemBeach.count === 0){

      itemBeach.count = itemBeach.count + 1;
      this.setState({score: this.state.score + 1});
      this.state.beaches.sort(() => Math.random() - 0.5);

    } else {
      console.log("game over")
    }
  };


  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>

        <Jumbotron />


            <ImgCard beaches={Beaches} handleClick={this.handleClick}></ImgCard>


      


      </div>
    );
  };

};

export default App;
