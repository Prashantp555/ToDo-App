import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState({
    title: "",
    content: "",
    deadline: "",
    priority: "Medium"
  });

  function handleChange(event) {
    const Ename = event.target.name;
    const newValue = event.target.value;
    setData((prevValue) => {
      return { ...prevValue, [Ename]: newValue };
    });
  }

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    const now = new Date();
    const formattedDateTime = now.toISOString().slice(0, 16); // Keep only YYYY-MM-DDTHH:mm
  
    const noteWithTimestamp = {
      ...data,
      dateTime: formattedDateTime // Use formatted date and time
    };
  
    props.onAdd(noteWithTimestamp);
    setData({
      title: "",
      content: "",
      deadline: "",
      priority: "Medium"
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={data.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={data.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {isExpanded && (
          <>
            <div>
              <label>
                Deadline:
                <input
                  type="date"
                  name="deadline"
                  onChange={handleChange}
                  value={data.deadline}
                />
              </label>
            </div>
            <div>
              <label>
                Priority:
                <select
                  name="priority"
                  onChange={handleChange}
                  value={data.priority}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </label>
            </div>
          </>
        )}

        <Fab onClick={submitNote}>
          <AddCircleIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;