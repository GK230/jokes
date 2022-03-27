import React, { useState } from "react";
import AddModal from "./modals/AddModal";
import UpdateModal from "./modals/UpdateModal";
import "./App.css";

function App() {
  const [joke, setJoke] = useState({});
  const [show, setShow] = useState(false);

  function getRandomJoke() {
    fetch("http://localhost:9000/jokes")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }

  return (
    <div className="App">
      <div className="joke-area">
        <p>{joke.joke}</p>
      </div>
      <div className="buttons">
        <button onClick={getRandomJoke}>View random joke</button>
        <button onClick={() => setShow(true)}>Add joke</button>
        <AddModal onClose={() => setShow(false)} show={show}></AddModal>
        <button onClick={() => setShow(true)}>Update joke</button>
        <UpdateModal
          onClose={() => setShow(false)}
          joke={joke}
          show={show}
        ></UpdateModal>
        <button>Delete joke</button>
      </div>
    </div>
  );
}

export default App;
