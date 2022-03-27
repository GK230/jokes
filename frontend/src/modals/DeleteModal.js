import React from "react";
import "./modal.css";

const DeleteModal = (props) => {
  function Submit() {
    fetch(`http://localhost:9000/jokes/${props.joke.id}`, {
      method: "delete",
    });
  }

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Delete this joke</h4>
        </div>
        <div className="modal-footer">
          <button type="submit" className="close" onClick={Submit}>
            Delete
          </button>
          <button className="close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
