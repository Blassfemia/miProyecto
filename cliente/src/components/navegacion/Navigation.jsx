import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className='relative'>
      <div className='absolute w-full flex justify-between p-4 items-center z-20'>
        <h1 className='text-indigo-700 font-bold text-2xl transition-transform duration-300 hover:scale-105 cursor-pointer '>
          MED<span className='text-blue-400'> |</span> <span className='text-indigo-700'>Dragones Marinos</span>
        </h1>
        <LuMenuSquare
          className='text-yellow-200 hover:text-indigo-600 duration-500 cursor-pointer hover:scale-125'
          size={30}
          onClick={toggleNav}
        />
      </div>
      <div 
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}>
        <ul className='flex flex-col w-full items-center justify-center pt-20'>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
            <a href="/login"> Inicia Sesion </a>
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
            <a href="#inicio">Inicio</a>
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
            Sobre Nosotros
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
           <a href="#nservicios">Nuestros Servicios</a>  
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
          <a href="#eventos"> Eventos </a>
          </li>
          <li className='font-bold text-3xl p-4 cursor-pointer text-white hover:text-indigo-600 transition-transform duration-300 hover:scale-105'>
            <a href="#contacto">Contacto</a> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;