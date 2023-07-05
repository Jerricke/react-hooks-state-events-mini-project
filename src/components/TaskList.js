import React from "react";
import Task from "./Task";

function TaskList({tasks, selected}) {

  const taskToDisplay = tasks.filter( (task) => {
    if (selected === "All") return true
    else return selected === task.category;
  })


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskToDisplay.map( (item, index) => {
        return <Task key={index} category={item.category} text={item.text} />
      })}
    </div>
  );
}

export default TaskList;
