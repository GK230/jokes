import React, { useState } from "react";
import AddModal from "./modals/AddModal";
import UpdateModal from "./modals/UpdateModal";
import DeleteModal from "./modals/DeleteModal";
import "./App.css";

function App() {
  const [joke, setJoke] = useState({});
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);


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
        <button onClick={() => setShow1(true)}>Update joke</button>
        <UpdateModal
          onClose={() => setShow1(false)}
          joke={joke}
          show1={show1}
        ></UpdateModal>
        <button onClick={() => setShow2(true)}>Delete joke</button>
        <DeleteModal
          onClose={() => setShow2(false)}
          joke={joke}
          show2={show2}
        ></DeleteModal>
      </div>
    </div>
  );
}

export default App;
