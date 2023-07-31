'use client';
import { useEffect, useState } from 'react';
import { getMantenimientos } from '@/data/mantenimientoData';

export const MantenimientoList = () => {
  const [mantenimientos, setMantenimientos] = useState([]);

  useEffect(() => {
    getMantenimientos().then((res) => {
      setMantenimientos(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Mantenimientos</h1>
      {mantenimientos.length > 0 ? (
        <ul className="space-y-8">
          {mantenimientos.map((mantenimiento) => (
            <li key={mantenimiento._id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Fecha de Mantenimiento: {mantenimiento.fechaMantenimiento}</h2>
              <p className="mb-2">Descripción: {mantenimiento.descripcion}</p>
              <p className="mb-2">Tipo de Mantenimiento: {mantenimiento.tipoMantenimiento.nombre}</p>
              <p className="mb-2">Nombre del Responsable: {mantenimiento.nombreResponsable}</p>
              <p className="mb-2">Estado: {mantenimiento.estado}</p>
              <p className="mb-2">Observación: {mantenimiento.observacion}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay Mantenimientos disponibles.</p>
      )}
    </div>
  );
};