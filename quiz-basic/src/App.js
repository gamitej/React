import React, { useState } from "react";
import "./index.css";
import { IoMdRefreshCircle } from 'react-icons/io';

const arr = [
  {
    que: " 2*2 = ? ",
    text: [
      { option: "2", ans: false },
      { option: "1", ans: false },
      { option: "4", ans: true },
      { option: "22", ans: false },
    ],
  },
  {
    que: "React is developed by ?",
    text: [
      { option: "Facebook", ans: true },
      { option: "MicroSoft", ans: false },
      { option: "Apple", ans: false },
      { option: "Amazon", ans: false },
    ],
  },
  {
    que: "Most goals scored for Man-Utd ?",
    text: [
      { option: "Rooney", ans: true },
      { option: "Ronaldo", ans: false },
      { option: "Van Nesterrooy", ans: false },
      { option: "Giggs", ans: false },
    ],
  },
  {
    que: " 2^11 = ?",
    text: [
      { option: "2042", ans: false },
      { option: "2032", ans: false },
      { option: "2036", ans: false },
      { option: "2048", ans: true },
    ],
  },
];

const App = () => {
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(true);

  const Next = (ans) => {
    if (ans) {
      setScore(score + 1);
    }
    console.log(score);
    if (q < arr.length - 1) {
      setQ(q + 1);
    } else {
      console.log("quiz finish");
      setShow(true);
    }
  };
  const Sam = () => {
    setStart(false);
  };
  const Icon=()=>{
    setQ(0)
    setStart(true)
    setShow(false)
    setScore(0)
  }

  return (
    <>
      <div className="main">
        {start ? (
          <h1
            onClick={Sam}
            className="heading"
            style={{
              cursor: "pointer",
            }}
          >
            Start The Quiz
          </h1>
        ) : (
          <>
            {show ? (
              <>
                <h1 className="result">
                  Your Score is : {score}/{arr.length}
                </h1>
                <IoMdRefreshCircle
                className='icon'
                onClick={Icon}
                />
            </>
            ) : (
              <>
                <div className="que-area">
                  <p>{arr[q].que}</p>
                </div>
                <div className="option-area">
                  {arr[q].text.map((p) => (
                    <button onClick={() => Next(p.ans)}>{p.option}</button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default App;
