import React, { useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const [addedJoke, setAddedJoke] = useState("");

  function handleChange(e) {
    setAddedJoke(e.target.value);
  }

  function onSubmit(e) {
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

  if (!props.show) {
    return null;
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
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            // onClick={props.onClose}
            className="close"
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
