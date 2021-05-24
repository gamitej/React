import React, { useEffect, useState } from "react";
const App = () => {
  const [a, setA] = useState("");
  const [get, setGet] = useState([]);
  const [id, setId] = useState();
  const [show, setShow] = useState(true);

  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGet(data);

        // to hide unhide search bar
        if (id > 0) {
          setShow(false);
        } else {
          setShow(true);
        }
      });
  }, [id]);

  return (
    <div className="App">
      <div className="enter">
        <input
          type="text"
          value={id}
          placeholder="Enter Id"
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className='inside'>
        {show ? (
          ""
        ) : (
          <div className="enter">
            <input
              type="text"
              placeholder="Enter Charater To Search"
              onChange={(e) => setA(e.target.value)}
            />
          </div>
        )}
     
      <div className="text">
        {get
          .filter((val) => {
            if (a === "") {
              return val;
            } else if (
              val.title.split(" ")[0].toLowerCase().startsWith(a.toLowerCase())
            )
              return val;
          })
          .map((p) => (
            <p key={p.id}>{p.title}</p>
          ))}
      </div>
      </div>
    </div>
  );
};

export default App;
