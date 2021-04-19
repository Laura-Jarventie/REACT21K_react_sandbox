import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div className="view">
      <h1>Check your input</h1>
      <div className="notepad">
        <p>
          First name <span>{props.firstname}</span>
        </p>
        <p>
          Last name <span>{props.lastname}</span>
        </p>
        <p>
          Phonenumber <span>{props.phonenumber}</span>
        </p>
        <p>
          Message <span>{props.message}</span>
        </p>
        <p>
          Role <span>{props.role}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
