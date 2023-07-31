'use client';
import { useEffect, useState } from 'react';
import { getUsuarioById} from '@/data/usuarioData';
import {  useParams, useRouter } from 'next/navigation';

const EditButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Encargado/Brigadistas/new/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Editar
    </button>
  );
};


export const Usuariovista = () => {
  const [usuario, setUsuario] = useState([]);
  const [implementos, setImplementos] = useState([]);
  const [capacitaciones, setCapacitaciones] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUsuarioById(params.id).then((res) => {
      setUsuario(res.data);
      setImplementos(res.data.implemento);
      setCapacitaciones(res.data.capacitacion);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ border: '1px solid white', padding: '10px' }}>
        <h1 className="text-2xl font-bold mb-4">Detalles del Usuario</h1>
        <div>
          <h2 className="text-lg font-bold mb-2">Nombre: {usuario.nombre}</h2>
          <p>Email: {usuario.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Implementos del Usuario:</h2>
          <ul>
            {implementos.map((implemento) => (
              <li key={implemento._id}>-{implemento.tipo.nombre}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Capacitaciones del Usuario:</h2>
          <ul>
            {capacitaciones.map((capacitacion) => (
              <li key={capacitacion._id}>-{capacitacion.nombre}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-x-2 mt-4">
        <EditButton id={usuario._id} />
      </div>
    </>
  );
};