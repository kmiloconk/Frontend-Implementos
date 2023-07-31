'use client';
import { useEffect, useState } from 'react';
import { getNotificaciones, deleteNotificacion } from '@/data/notificacionData';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ id, onNotificacionDeleted }) => {
  const router = useRouter(); // Use 'router' instead of 'push' for navigation
  const handleDelete = async () => {
    try {
      await deleteNotificacion(id);
      onNotificacionDeleted();
      router.push('/Notificaciones'); // Use the correct route path for redirection
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="m-1 inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Eliminar
    </button>
  );
};

export const NotificacionList = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [notificacionDeleted, setNotificacionDeleted] = useState(false);
  const router = useRouter(); // Use 'router' instead of 'push' for navigation

  const handleNotificacionDeleted = () => {
    setNotificacionDeleted(!notificacionDeleted);
  };

  useEffect(() => {
    getNotificaciones().then((res) => {
      setNotificaciones(res.data);
      console.log(res.data);
    });
  }, [notificacionDeleted]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Solicitudes</h1>
      {notificaciones.length > 0 ? (
        <ul className="space-y-4">
          {notificaciones.map((notificacion) => (
            <li key={notificacion._id}>
              <div className="border rounded-lg p-4">
                <h2 className="text-lg font-bold">Brigadista: {notificacion.brigadista.nombre}</h2>
                <p>Implemento: {notificacion.implemento.tipo.nombre}</p>
                <p>Descripción: {notificacion.descripcion}</p>
              </div>
              <div className="flex justify-end mt-2">
                <DeleteButton id={notificacion._id} onNotificacionDeleted={handleNotificacionDeleted} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay Notificaciones disponibles.</p>
      )}
    </div>
  );
};