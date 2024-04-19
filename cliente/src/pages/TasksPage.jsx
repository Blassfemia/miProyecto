import { useEffect, useState } from "react";
import { useTasks } from "../context/tasksContext.jsx";
import TaskCard from "../components/TaskCard.jsx";
import Pagination from "../components/PaginationItem.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  const maximo = tasks.length / porPagina;

  return (
    <div className="container shadow-md shadow-indigo-500 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-3 ">
        {tasks
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
      </div>

      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

export default TasksPage;
