// import classes from "./DisplayTask.module.css";
import Card from "../UI/Card";
const DisplayTask = (props) => {
  const onDeleteHandler = (event) => {
    // console.log(event.target.id)
    props.deleteTask(event.target.id);
  };

  return (
    <div>
      <ul className="list--container">
        {props.tasks.map((task) => (
          <Card>
            <li key={task.id} className="task--list">
              <div> {task.description}</div>
              <div>
                <button
                  className="delete--button"
                  id={task.id}
                  type="button"
                  onClick={onDeleteHandler}
                >
                  Delete
                </button>
              </div>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
};
export default DisplayTask;
