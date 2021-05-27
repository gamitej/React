import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [val, setVal] = useState([]);
  const [i, setI] = useState(1);
  const Add = () => {
    setI(i + 1);
    setVal([...val, { id: i, f: i, l: i }]);
  };

  const Remove = (index) => {

    //const b = val.splice(index,1)
    const b = val.filter((item) => item.id !== index);
    setVal(b);
  };

  return (
    <div className="flex">
      <div className="btn">
        <button onClick={Add}>ADD</button>
      </div>
      <div className="main">
        {val.length !== 0 ? (
          val.map((p) => (
            <div className="box" key={p.id}>
              <p>First Name : {p.f}</p>
              <p>Last Name : {p.l}</p>
              <div className="remove">
                <p onClick={() => Remove(p.id)}> X </p>
              </div>

              <br />
            </div>
          ))
        ) : (
          <h3 className="alert">nothing to-do </h3>
        )}
      </div>
    </div>
  );
}
