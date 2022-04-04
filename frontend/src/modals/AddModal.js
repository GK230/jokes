import React, { useState } from "react";
import "./modal.css";

const AddModal = (props) => {
  const [addedJoke, setAddedJoke] = useState("");

  if (!props.show) {
    return null;
  }

  function handleChange(e) {
    setAddedJoke(e.target.value);
  }

  function Submit(e) {
    e.preventDefault();
    fetch("http://localhost:9000/jokes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joke: addedJoke,
      }),
    });
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add a joke</h4>
        </div>
        <div className="modal-body">
          <textarea
            placeholder="Enter your joke"
            type={"reset"}
            className="joke"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="submit" className="add" onClick={Submit}>
            Add
          </button>
          <button className="close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
