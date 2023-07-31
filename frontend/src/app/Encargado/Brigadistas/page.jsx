import React from 'react';
import { UsuarioList } from './UsuariosList';
import Link from 'next/link';

const Button = () => (
  <Link href="/Encargado/Brigadistas/new">
    <span className="fixed bottom-4 right-4 inline-block hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">
      Crear nuevo Brigadista
    </span>
  </Link>
);

const Tasks = () => {
  return (
    <section>
      <UsuarioList />
      <Button />
    </section>
  );
};

export default Tasks;