import { useEffect, useState } from "react";

import AddTask from "./component/AddTask";
import DisplayTask from "./component/DisplayTask";
import Header from "./component/Header";

function App() {
  const dummyDetails = [];
  const [taskDetails, setTaskDetails] = useState(dummyDetails);

  const newTask = (task) => {
    const newList = [...taskDetails];
    newList.push(task);
    // console.log(newList);
    setTaskDetails(newList);
  };

  const deleteTask = (id) => {
    // console.log('App.js deleteTask id ',id)
    // console.log('App.js deleteTask taskDetails ',taskDetails)
    const newList = taskDetails.filter(
      (task) => id.toString() !== task.id.toString()
    );
    // console.log('App.js deleteTask newList ',newList)
    setTaskDetails(newList);
  };
  return (
    <div className="container">
      <Header />
      <AddTask addTask={newTask} tasks={taskDetails} />
      <DisplayTask deleteTask={deleteTask} tasks={taskDetails} />
    </div>
  );
}

export default App;
