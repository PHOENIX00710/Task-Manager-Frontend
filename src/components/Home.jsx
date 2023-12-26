import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Title1",
      description:
        "Description1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis voluptas corrupti, illum labore aspernatur nihil magni at veritatis eveniet necessitatibus, alias quod nesciunt assumenda? ",
    },
    {
      title: "Title2",
      description:
        "Description2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis voluptas corrupti, illum labore aspernatur nihil magni at veritatis eveniet necessitatibus, alias quod nesciunt assumenda? ",
    },
  ]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    let temp = [...tasks, { title, description: desc }];
    setTitle(""); // Clear the title input
    setDesc(""); // Clear the description input
    setTasks(temp);
  };

  const handleDeleteFunction = (title, desc) => {
    console.log(title, desc);
    let temp = tasks.filter((task) => {
      return task.title !== title && task.description !== desc;
    });
    setTasks(temp);
  };

  return (
    <>
      <div id="home">
        <h1>ADD TASKS</h1>
        <form>
          <input
            id="new-title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            id="new-description"
            placeholder="Task Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              handleAddTask(e);
            }}
          >
            ADD TASK
          </button>
        </form>
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <Task
            key={index}
            title={task.title}
            description={task.description}
            deleteFunction={handleDeleteFunction}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
