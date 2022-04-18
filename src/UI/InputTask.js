import { useState, useRef } from "react";
// import classes from "./InputTask.module.css";

const InputTask = (props) => {
  const [task, setTask] = useState("");
  const taskData = useRef();

  const taskHandler = (event) => {
    setTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const tempTask = {
      id: Math.random(10),
      description: task,
    };
    if (task.trim().length === 0) return;
    props.addNewTask(tempTask);
    setTask("");
    taskData.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input--task">
        <label className="input--label" htmlFor="addTask">
          Task
        </label>
        <input
          className="input--text"
          type="text"
          ref={taskData}
          onChange={taskHandler}
        />
        <button className="input--btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
export default InputTask;
