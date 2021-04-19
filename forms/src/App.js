import React, { Component } from "react";

import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showPopup: false,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      message: this.state.message,
      role: this.state.role,
    };
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View {...props} />
        {this.state.showPopup && <Popup {...props} />}
      </div>
    );
  }
}

export default App;
