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
    const data = this.state;
    return (
      <div>
        <Form change={this.changeHandler} submit={this.popupHandler} />
        <View
          firstname={data.firstname}
          lastname={data.lastname}
          phonenumber={data.phonenumber}
          message={data.message}
          role={data.role}
        />
        {this.state.showPopup && (
          <Popup
            firstname={data.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role}
          />
        )}
      </div>
    );
  }
}

export default App;
