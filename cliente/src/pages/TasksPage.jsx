import { useEffect, useState } from "react";
import { useTasks } from "../context/tasksContext.jsx";
import TaskCard from "../components/TaskCard.jsx";
import Pagination from "../components/PaginationItem.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [ascending, setAscending] = useState(true); // Nuevo estado para controlar el orden

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  const maximo = tasks.length / porPagina;

  let filterTasks = (tasks, searchTerm) => {
    return tasks.filter(task =>
      task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  let sortTasksByDate = (tasks, sortByDate, ascending) => {
    if (sortByDate) {
      return tasks.sort((a, b) => {
        let comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        return ascending ? comparison : -comparison;
      });
    }
    return tasks;
  }
  
  let filteredTasks = filterTasks(tasks, searchTerm);
  let sortedTasks = sortTasksByDate([...filteredTasks], sortByDate, ascending); // Orden según el estado
  
  return (
    <div className="container shadow-md shadow-indigo-500 ">
      <div className="flex">
        <button
          onClick={() => setSortByDate(!sortByDate)}
          className="text-indigo-600 bg-white p-1 justify-items-start rounded-md shadow-md shadow-indigo-600 border-indigo-600"
        >
          Ordenar por fecha
        </button>
        <button
          onClick={() => setAscending(!ascending)}
          className="text-indigo-600 bg-white p-1 justify-items-start rounded-md shadow-md shadow-indigo-600 border-indigo-600 ml-2"
        >
          Cambiar orden
        </button>
        <input
          type="text"
          placeholder=" Buscar..."
          onChange={event => setSearchTerm(event.target.value)}
          className="text-indigo-600 p-1 justify-items-end rounded-md shadow-md shadow-indigo-600 border-indigo-600 ml-auto"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 my-3">
        {sortedTasks
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
