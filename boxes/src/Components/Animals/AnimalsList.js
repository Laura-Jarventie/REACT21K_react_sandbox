import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import SearchBox from "../SearchBox/SearchBox";
import "./Animals.css";

import { myawesomelist as animals } from "./animals";

class AnimalsList extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    alert("Hello, my name is " + name);
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const animalslist = animalFilter.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          clickme={() => this.clickHandler(animal.name)}
          key={animal.name}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <div className="animalList">{animalslist}</div>
      </div>
    );
  }
}

export default AnimalsList;
