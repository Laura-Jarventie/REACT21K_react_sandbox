import React from "react";
import "./Popup.css";

const closeHandler = () => {
  window.location.reload();
};

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name: <span>{props.firstname}</span>
          </p>
          <p>
            Last name: <span>{props.lastname}</span>
          </p>
          <p>
            Phonenumber: <span>{props.phonenumber}</span>
          </p>
          <p>
            Message: <span>{props.message}</span>
          </p>
          <p>
            Role: <span>{props.role}</span>
          </p>
          <button onClick={props.submit}>Yes, I am sure</button>
          <button className="secondary" onClick={closeHandler}>
            Nope, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
