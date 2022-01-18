import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const {buttonText, reset} = props;

  return (
    <button onClick={reset}>
      {buttonText}
    </button>
  );
};
 
const Application = () => {
  // your code here
  const [name, setName] = useState("Suliman");

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button reset={reset} buttonText="Reset"/>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
