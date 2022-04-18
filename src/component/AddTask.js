import InputTask from "../UI/InputTask";
import { Fragment } from "react";
import Card from "../UI/Card";
const AddTask = (props) => {
  return (
    <Fragment>
      <Card>
        <InputTask addNewTask={props.addTask} />
      </Card>
    </Fragment>
  );
};
export default AddTask;
