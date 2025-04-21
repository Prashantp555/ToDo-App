import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../styles/HomePage.css";

function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [note, setNote] = React.useState([]);
  const [filter, setFilter] = useState("All");

  React.useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  function addData(data) {
    setNote((prevNote) => {
      return [...prevNote, data];
    });
  }

  function deleteData(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function sortNotesByPriority(notes) {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return notes.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function getFilteredNotes() {
    if (filter === "All") {
      return note;
    }
    return note.filter((noteItem) => noteItem.priority === filter);
  }

  return (
    <div>
      <Header />
      {user && <CreateArea onAdd={addData} />}
      <div className="filter-container">
        <label htmlFor="priority-filter">Filter by Priority: </label>
        <select
          id="priority-filter"
          value={filter}
          onChange={handleFilterChange}
          className="priority-filter"
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      {sortNotesByPriority(getFilteredNotes()).map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            dateTime={noteItem.dateTime}
            deadline={noteItem.deadline}
            priority={noteItem.priority}
            isClicked={deleteData}
          />
        );
      })}
    </div>
  );
}

export default HomePage;