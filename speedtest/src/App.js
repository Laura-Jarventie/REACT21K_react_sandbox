import React, { Component } from "react";
import Circle from "./Components/Circle";

import "./App.css";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
      { id: 5, color: "black" },
      { id: 6, color: "white" },
    ],
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow, you clicked a circle " + id);
    this.setState({
      score: this.state.score + 10,
    });
  };

  nextCircle = () => {
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 6);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  endHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.color}
          color={c.color}
          click={() => this.clickHandler(c.id)}
        />
      );
    });

    return (
      <main>
        <h1>Speedtest</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles"> {circlesList}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler}>Stop</button>
      </main>
    );
  }
}

export default App;
