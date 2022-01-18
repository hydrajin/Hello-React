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
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your Name"
      />
      <Button reset={reset} buttonText="Reset"/>
      {/* {name.length > 0 && <h1>Hello {name}</h1>} */}
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
