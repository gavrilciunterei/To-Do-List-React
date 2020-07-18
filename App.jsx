import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import allColors from "./styles/colors";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import { generate as id } from "shortid";

const GlobalSyle = createGlobalStyle`
    body{
        font-family:sans-serif;
        background-color: #222;
        color:${allColors.mainColor};
        text-align: center;
        margin:0;
    }
`;

const App = () => {
  const [colorSelected, setColorSelected] = useState(allColors.colors[0]);
  const [tasks, setTasks] = useState([]);

  // comprueba si está vacio el input y sino está crea nueva tarea
  const handleAddTask = (e) => {
    e.preventDefault();
    if (e.target.inputText.value.trim !== "") {
      createNewTask(e.target.inputText.value);
    }
  };

  // crea neva tarea asignandole una id, sacando el texto y color seleccionado
  const createNewTask = (inputText) => {
    const taskNew = {
      id: id(),
      texto: inputText,
      color: colorSelected,
      done: false,
    };
    setTasks([...tasks, taskNew]);
  };

  // setea el color elegido
  const handleColorSelected = (color) => {
    setColorSelected(color);
  };

  // llama cuando das click a un checkbox, busca en el array
  // y marca la tara como finalizada
  const handleDone = (id) => {
    const currentTasks = [...tasks];
    const task = currentTasks.find((task) => task.id === id);
    const index = currentTasks.indexOf(task);

    currentTasks[index].done = !currentTasks[index].done;
    setTasks(currentTasks);
  };

  // busca por id dentro del array con filter, lo borra y asigna el nuevo array
  const handleDelete = (id) => {
    let currentTasks = [...tasks];
    currentTasks = currentTasks.filter((task) => task.id !== id);

    setTasks(currentTasks);
  };

  return (
    <>
      <GlobalSyle />
      <h1>To do list</h1>
      <FormTask
        handleAddTask={handleAddTask}
        handleColorSelected={handleColorSelected}
        colorSelected={colorSelected}
      />

      {tasks.length === 0 && <p>Not tasks yet</p>}
      {tasks.map((task) => (
        <Task
          color={task.color}
          texto={task.texto}
          done={task.done}
          key={task.id}
          handleDone={() => handleDone(task.id)}
          handleDelete={() => handleDelete(task.id)}
        ></Task>
      ))}
    </>
  );
};

export default App;
