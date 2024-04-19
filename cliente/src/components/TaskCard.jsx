import React from "react";
//import { useAuth } from '../context/authContext'
import { useTasks } from "../context/tasksContext";
import { Link } from "react-router-dom";

import days from "dayjs";
import utc from "dayjs/plugin/utc";
//import alertModal from "./modals/modal";
days.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md shadow-md ">
      <header className="flex justify-between ">
        <h1 className=" flex text-2xl font-bold  scroll-m-7">{task.title}</h1>
      </header>

      <p className="text-slate-300 my-2 items-start text-justify overflow-hidden h-12 ">{task.description}</p>
      <p>{days(task.date).utc().format("DD-MM-YYYY")}</p>

      <div className="flex gap-x-2 items-center my-2 ">
        <button
          className=" bg-red-500 hover:bg-red-800 text-white px-4 py2 rounded-md active:translate-y-1"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Borrar
        </button>
        <button className=" bg-blue-300 hover:bg-blue-600 text-white px-4 py2 rounded-md active:translate-y-1">
          <Link to={`/tasks/${task._id}`}>Editar</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
