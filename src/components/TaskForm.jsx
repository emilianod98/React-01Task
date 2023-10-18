import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3" >Crea tu tarea</h1>
      <form onSubmit={handleSubmit} className="bg-yellow-500 p-10 mb-4">
        <input
          placeholder="Escribe tu tarea."
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-yellow-400 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripción"
          cols="30"
          rows="10"
          onChange={function (e) {
            setDescription(e.target.value);
          }}
          className="bg-yellow-400 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-orange-600 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
