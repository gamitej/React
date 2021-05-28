import "./App.css";
import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";


export default function App() {
  const [val, setVal] = useState([]);
  const [i, setI] = useState(1);
  const [sub, setSub] = useState("");

  const Add = () => {
    if (sub===""){
      alert("Input Field Can't be empty")
    }
    else{
    setI(i + 1);
    setVal([...val, { id: i, f: sub }]);
    setSub("");
    }
  };

  const Remove = (index) => {
    const b = val.filter((item) => item.id !== index);
    setVal(b);
  };

  const Upload = (e) => {
    setSub(e.target.value);
  };

  const Refresh = () => {
    setVal([]);
  };

  return (
    <div className="flex">
      <div className="heading">
        <ins> TODO </ins>
      </div>
      <div className="input-btn">
        <div className="input">
          <input value={sub} placeholder="Enter " onChange={Upload} />
        </div>
        <div className="btn">
          <button onClick={Add}>ADD</button>
        </div>
        <FiRefreshCcw
          className="refresh"
          onClick={Refresh}
          style={{
            width: "2rem",
            height: "1.7rem",
          }}
        />
      </div>
      <div className="main">
        {val.length !== 0 ? (
          val.map((p) => (
            <div className="box" key={p.id}>
              <p style={{
                textTransform:'uppercase'
              }}> {p.f}</p>
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
