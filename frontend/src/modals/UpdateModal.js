import React, { useState } from "react";
import "./modal.css";

const UpdateModal = (props) => {
  const [updatedJoke, setUpdatedJoke] = useState("");

  function handleChange(e) {
    setUpdatedJoke(e.target.value);
  }

  function Submit(e) {
    e.preventDefault();
    fetch("http://localhost:9000/jokes", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.joke.id,
        joke: updatedJoke,
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
          <h4 className="modal-title">Update this joke</h4>
        </div>
        <div className="modal-body">
          <textarea
            placeholder={props.joke.joke}
            className="joke"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="submit" className="close" onClick={Submit}>
            Update
          </button>
          <button className="close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
