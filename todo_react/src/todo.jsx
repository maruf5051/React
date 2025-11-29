import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import "./todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [timeDate, setTimeDate] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  // date and time
  const handleDateTime = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    setTimeDate(`${formattedDate} - ${formattedTime}`);
  };

  useEffect(() => {
    const interval = setInterval(handleDateTime, 1000); // Update every second to keep time accurate
    return () => clearInterval(interval);
  });

  return (
    <section className="todo-container">
      {/* Header Section */}
      <header>
        <h1>Todo List</h1>
        <h2 className="datetime">{timeDate}</h2>
      </header>

      {/* Form Section */}
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>

          {/* Buttons Section */}
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curEle, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curEle}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
