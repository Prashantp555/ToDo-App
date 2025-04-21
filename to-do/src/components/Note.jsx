import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

function Note(props) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [completedDateTime, setCompletedDateTime] = useState("");

  const handleComplete = () => {
    setIsCompleted(true);
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
    setCompletedDateTime(formattedDateTime);
  };

  return (
    <div className="note">
      <h1 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {props.title}
      </h1>
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {props.content}
      </p>
      <p><strong>Date & Time:</strong> {props.dateTime}</p>
      <p><strong>Deadline:</strong> {props.deadline}</p>
      <p><strong>Priority:</strong> {props.priority}</p>
      {isCompleted && (
        <p><strong>Completed On:</strong> {completedDateTime}</p>
      )}
      <button
        onClick={() => {
          props.isClicked(props.id);
        }}
      >
        <DeleteIcon />
      </button>
      {!isCompleted && (
        <button onClick={handleComplete}>
          <CheckIcon />
        </button>
      )}
    </div>
  );
}

export default Note;