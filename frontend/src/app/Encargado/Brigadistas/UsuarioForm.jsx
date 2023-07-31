import React, { useState } from 'react';
import Link from 'next/link';

const UsuarioForm = ({ usuario, setUsuario, handleSubmit, listImplementos, listCapacitaciones }) => {
  const { nombre, email, implemento = [], capacitacion = [] } = usuario;

  // Estados locales para almacenar los nuevos elementos de implementos y capacitaciones
  const [nuevoImplemento, setNuevoImplemento] = useState({});
  const [nuevaCapacitacion, setNuevaCapacitacion] = useState({});

  // Funciones para agregar nuevos elementos a los arrays de implementos y capacitaciones
  const agregarImplemento = () => {
    if (nuevoImplemento._id) {
      const implementoEncontrado = listImplementos.find(item => item._id === nuevoImplemento._id);
      if (implementoEncontrado) {
        setUsuario({ ...usuario, implemento: [...implemento, implementoEncontrado] });
        setNuevoImplemento(''); // Reinicia el estado para la siguiente entrada.
      }
    }
  };

  const agregarCapacitacion = () => {
    if (nuevaCapacitacion._id) {
      const capacitacionEncontrada = listCapacitaciones.find(item => item._id === nuevaCapacitacion._id);
      if (capacitacionEncontrada) {
        setUsuario({ ...usuario, capacitacion: [...capacitacion, capacitacionEncontrada] });
        setNuevaCapacitacion(''); // Reinicia el estado para la siguiente entrada.
      }
    }
  };

  // Funciones para quitar elementos de los arrays de implementos y capacitaciones
  const quitarImplemento = (implementoId) => {
    const implementosActualizados = implemento.filter(item => item._id !== implementoId);
    setUsuario({ ...usuario, implemento: implementosActualizados });
  };

  const quitarCapacitacion = (capacitacionId) => {
    const capacitacionesActualizadas = capacitacion.filter(item => item._id !== capacitacionId);
    setUsuario({ ...usuario, capacitacion: capacitacionesActualizadas });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-bold mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={nombre}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="implemento" className="block text-sm font-bold mb-2">
          Implemento/s
        </label>
        <div className="flex items-center">
          <select
            id="implemento"
            className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nuevoImplemento._id}
            onChange={(e) => {
              const implementoId = e.target.value;
              const implementoSeleccionado = listImplementos.find(item => item._id === implementoId);
              setNuevoImplemento(implementoSeleccionado || {});
            }}
          >
            <option value="">Selecciona un Implemento</option>
            {listImplementos.map((implementoOption) => (
              <option key={implementoOption._id} value={implementoOption._id}>
                {implementoOption.tipo.nombre}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={agregarImplemento}
            className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar
          </button>
        </div>
        <ul>
          {implemento.map((implementoItem) => (
            <li key={implementoItem._id}>
              {implementoItem.tipo.nombre}
              <button
                type="button"
                onClick={() => quitarImplemento(implementoItem._id)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label htmlFor="capacitacion" className="block text-sm font-bold mb-2">
          Capacitación/nes
        </label>
        <div className="flex items-center">
          <select
            id="capacitacion"
            className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nuevaCapacitacion._id}
            onChange={(e) => {
              const capacitacionId = e.target.value;
              const capacitacionSeleccionada = listCapacitaciones.find(item => item._id === capacitacionId);
              setNuevaCapacitacion(capacitacionSeleccionada || {});
            }}
          >
            <option value="">Selecciona una Capacitación</option>
            {listCapacitaciones.map((capacitacionOption) => (
              <option key={capacitacionOption._id} value={capacitacionOption._id}>
                {capacitacionOption.nombre}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={agregarCapacitacion}
            className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar
          </button>
        </div>
        <ul>
          {capacitacion.map((capacitacionItem) => (
            <li key={capacitacionItem._id}>
              {capacitacionItem.nombre}
              <button
                type="button"
                onClick={() => quitarCapacitacion(capacitacionItem._id)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar!
          </button>
        </div>
      </form>
    );
  };
  
  export default UsuarioForm;

