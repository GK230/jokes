import React, { useState } from "react";
import Modal from "./modals/add-modal";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [show, setShow] = useState(false);

  function getRandomJoke() {
    fetch("http://localhost:9000/jokes")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke.joke);
      });
  }

  return (
    <div className="App">
      <div className="joke-area">
        <p>{joke}</p>
      </div>
      <div className="buttons">
        <button onClick={getRandomJoke}>View random joke</button>
        <button onClick={() => setShow(true)}>Add joke</button>
        <Modal  onClose={() => setShow(false)} show={show}>
        </Modal>
        <button>Change joke</button>
        <button>Delete joke</button>
      </div>
    </div>
  );
}

export default App;
