const Footerindex = () => {
  return (
    <div
      id="contacto"
      className="flex w-full mt-24 bg-yellow-100 text-gray-200 py-2 px-2"
    >
      {/*Contenedor Principal*/}
      <div className="items-center text-center justify-center max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 py-8 px-4">
        {/*Seccion contacto*/}
        <img src="/img/MED.jpeg" alt="" className="w-40 rounded-md transition-transform hover:scale-125 hover:border-indigo-700 hover:border-solid" />
        <div className="grid  items-center justify-center ">
          <h6 className="text-black font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer">
            Contactos
          </h6>
          <ul>
            <li className="text-fuchsia-900 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              <a
                href="https://www.instagram.com/club_dragones_marinos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="text-blue-700 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              <a
                href="https://www.facebook.com/people/Club-de-Nataci%C3%B3n-Dragones-Marinos/100085682863164/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="text-green-500 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              <a
                href="https://wa.link/95pecg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </li>
            <li className="text-red-400 py-1 transition-transform duration-500 hover:scale-105 cursor-pointer">
              <a
                href="https://www.instagram.com/club_dragones_marinos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Correo Electronico
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Footerindex;
