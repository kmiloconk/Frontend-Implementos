import React from 'react';
import { ImplementoList } from './ImplementosList';
import Link from 'next/link';

const Button = () => (
  <Link href="/Encargado/Implementos/new">
    <span className="fixed bottom-4 right-4 inline-block hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">
      Crear nuevo Implemento
    </span>
  </Link>
);

const Tasks = () => {
  return (
    <section>
      <ImplementoList />
      <Button />
    </section>
  );
};

export default Tasks;