'use client';
import { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '@/data/usuarioData';
import { useRouter } from 'next/navigation';

const VerButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Encargado/Brigadistas/ver/${id}`)}
      className="m-1 inline-block hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Ver
    </button>
  );
};

const DeleteButton = ({ id, onUsuarioDeleted }) => {
  const { push } = useRouter();
  const handleDelete = async () => {
    try {
      await deleteUsuario(id);
      onUsuarioDeleted();
      push('/Encargado/Brigadistas');
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

export const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioDeleted, setUsuarioDeleted] = useState(false);

  const handleUsuarioDeleted = () => {
    setUsuarioDeleted(!usuarioDeleted);
  };

  useEffect(() => {
    getUsuarios().then((res) => {
      const brigadistaUsuarios = res.data.filter((usuario) => usuario.rol.nombre === 'Brigadista');
      setUsuarios(brigadistaUsuarios);
      console.log(brigadistaUsuarios);
    });
  }, [usuarioDeleted]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Brigadistas</h1>
      {usuarios.length > 0 ? (
        <ul className="space-y-8">
          {usuarios.map((usuario) => (
            <li key={usuario._id} className="border p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold mb-2">Nombre: {usuario.nombre}</h2>
                  <p>Email: {usuario.email}</p>
                </div>
                <div className="space-x-2">
                  <VerButton id={usuario._id} />
                  <DeleteButton id={usuario._id} onUsuarioDeleted={handleUsuarioDeleted} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay Usuarios disponibles.</p>
      )}
    </div>
  );
};

