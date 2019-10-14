import React, {Component} from "react";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImgCard from "./components/ImgCard/ImgCard";
import Beaches from "./beaches.json";
import "./Style.css"

class App extends Component {
  state = {
    beaches: Beaches,
    score: 0,
    topScore: 0
  };

  // Function for resetting score, count and high score if applicable when game is over
  gameOver = () => {

    if (this.state.score > this.state.topScore){

      this.setState({topScore: this.state.score});
    }
    this.state.beaches.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0})
  };

  // This function handles the score and state when each card is clicked
  handleClick = id => {

    let itemBeach = this.state.beaches.find(obj => obj.id === id)

    if (itemBeach.count === 0){

      itemBeach.count = itemBeach.count + 1;
      this.setState({score: this.state.score + 1});
      this.state.beaches.sort(() => Math.random() - 0.5);

    } else {
      console.log("game over")
      this.gameOver();
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
