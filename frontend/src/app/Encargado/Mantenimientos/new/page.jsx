'use client';
import { useState, useEffect } from 'react';
import MantenimientoForm from '../MantenimientoForm';
import { useParams, useRouter } from 'next/navigation';
import { createMantenimiento ,getTiposMan } from '@/data/mantenimientoData';

const NewMantenimiento = () => {
const [mantenimiento, setMantenimiento] = useState({});
const [tiposMantenimiento, setTiposMantenimiento] = useState([]);
useEffect(() => {
    getTiposMan().then((res) => {
    {
        setTiposMantenimiento(res.data);
        console.log(res.data);
    }
    });

},[]);;

  const params = useParams();
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    try {
      await createMantenimiento(mantenimiento);
      push('/Encargado/Mantenimientos');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MantenimientoForm mantenimiento={mantenimiento} setMantenimiento={setMantenimiento} handleSubmit={handleSubmit} tiposMantenimiento={tiposMantenimiento}/>
  );
};

export default NewMantenimiento;