import "./App.css";
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [val, setVal] = useState("");
  const [name,setName] = useState("Click To Get Joke's");
  const url = "https://official-joke-api.appspot.com/random_joke";
  const Click = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVal(data);
        setShow(false);
      });
    setName('Next Joke')
  };

  return (
    <div className="App">
      <button onClick={Click}>{name}</button>
      {show ? (
        ''
      ) : (
        <div className="card">
          <p>{val.setup}</p>
          <p>{val.punchline}</p>
        </div>
      )}
    </div>
  );
}

export default App;
