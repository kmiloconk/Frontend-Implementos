'use client';
import { useEffect, useState } from 'react';
import { getImplementos, deleteImplemento } from '@/data/implementoData';
import { useRouter } from 'next/navigation';

const EditButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Encargado/Implementos/new/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Editar
    </button>
  );
};

const DeleteButton = ({ id, onImplementoDeleted }) => {
  const { push } = useRouter();
  const handleDelete = async () => {
    try {
      await deleteImplemento(id);
      onImplementoDeleted();
      push('/Encargado/Implementos');
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

export const ImplementoList = () => {
  const [implementos, setImplementos] = useState([]);
  const [implementoDeleted, setImplementoDeleted] = useState(false);

  const handleImplementoDeleted = () => {
    setImplementoDeleted(!implementoDeleted);
  };

  useEffect(() => {
    getImplementos().then((res) => {
      {
        setImplementos(res.data);
        console.log(res.data);
    }
    });
  }, [implementoDeleted]);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <h1 className="text-2xl font-bold mb-4">Lista de Implementos</h1>
      {implementos.length > 0 ? (
        <ul className="space-y-4">
          {implementos.map((implemento) => (
            <li key={implemento._id} className="border rounded-lg p-4">
              <div className="border-white border-2 rounded-lg p-4">
                <h2 className="text-lg font-bold">Tipo: {implemento.tipo.nombre}</h2>
                <p>Estado: {implemento.estado.nombre}</p>
                <p>Fecha de Vencimiento: {implemento.fechaVencimiento}</p>
                <p>Categoría: {implemento.categoria.nombre}</p>
                <p>Solicitado por Brigadista: {implemento.solicitadoPorBrigadista ? 'Sí' : 'No'}</p>
              </div>
              <div className="space-x-2">
                <EditButton id={implemento._id} />
                <DeleteButton id={implemento._id} onImplementoDeleted={handleImplementoDeleted} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay Implementos disponibles.</p>
      )}
    </div>
  );
};