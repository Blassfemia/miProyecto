const Footerindex = () => {
    return (
      <div id="contacto" className='w-full mt-24 bg-yellow-600 text-gray-200 py-2 px-2'>
        {/*Contenedor Principal*/}
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 px-4'>
          {/*Seccion Pintores*/}
          <div>
            <h6 className='font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer'>
              Pintores
            </h6>
            <ul>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Vincent Van Gogh</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Leonardo da Vinci</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Salvador Dalí</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Pablo Picasso</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Miguel Ángel</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Sandro Botticelli</li>
            </ul>
          </div>
          {/*Seccion Cuadros*/}
          <div>
            <h6 className='font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer'>
              Cuadros
            </h6>
            <ul>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>
                La Noche Estrellada
              </li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>La Mona Lisa</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>
                La Persistencia de la Memoria
              </li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Guernica</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>
                La Creación de Adán
              </li>
            </ul>
          </div>
          {/*Seccion Cuadros*/}
          <div>
            <h6 className='font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer'>
              Compañia
            </h6>
            <ul>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Apoyo</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Blog</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Obras</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Pintores</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Contactos</li>
            </ul>
          </div>
          {/*Seccion Legal*/}
          <div>
            <h6 className='font-bold uppercase pt-2 transition-transform duration-500 hover:scale-105 cursor-pointer'>
              Legal
            </h6>
            <ul>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Condiciones</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Privacidad</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Terminos</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Políticas</li>
              <li className='py-1 transition-transform duration-500 hover:scale-105 cursor-pointer'>Reclamos</li>
            </ul>
          </div>
          {/*Seccion Subscripcion*/}
          <div className='col-span-2 py-8 md:pt-2'>
            <p className='font-bold uppercase transition-transform duration-500 hover:scale-105 cursor-pointer mb-4'>
              Subscribete
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input
                className='transition-transform duration-500 hover:shadow-2xl cursor-pointer w-full p-2 mr-4 rounded-xl mb-4 '
                type='email'
                placeholder='Enter Email..'
              />
              <button className='p-2 mb-4 rounded-xl bg-yellow-800 transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
                Subscribir
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footerindex