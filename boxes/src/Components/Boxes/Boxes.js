import React, { Component } from "react";
import Box from "./Box";

class Main extends Component {
  state = {
    persons: [
      {
        name: "Margit",
        age: 25,
        title: "CEO",
      },
      {
        name: "Kati",
        age: 25,
        title: "Designer",
      },
      {
        name: "Mari",
        age: 25,
        title: "Developer",
      },
    ],
  };

  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Margit",
          age: 25,
          title: "Teacher",
        },
        {
          name: "Kati",
          age: 25,
          title: "Student",
        },
        {
          name: "Mari",
          age: 25,
          title: "Student",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me main page</button>
        <div>
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
            example={this.state.something}
          />
          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default Main;
