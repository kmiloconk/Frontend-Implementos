'use client';
import { useState, useEffect } from 'react';
import UsuarioForm from '../UsuarioForm';
import { useParams, useRouter } from 'next/navigation';
import { createUsuario,getCapacitaciones} from '@/data/usuarioData';
import {getImplementos} from '@/data/implementoData'

const NewUsuario = () => {
const [usuario, setUsuario] = useState({
  rol:'646c60f4fc8acd4c18ab6d49'
});
const [implementos, setImplemento] = useState([]);
const [capacitaciones, setCapacitacion] = useState([]);
useEffect(() => {
    getCapacitaciones().then((res) => {
    {
        setCapacitacion(res.data);
        console.log(res.data);
    }
    });
    getImplementos().then((res) => {
        {
        setImplemento(res.data);
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
      await createUsuario(usuario);
      push('/Encargado/Brigadistas');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UsuarioForm usuario={usuario} setUsuario={setUsuario} handleSubmit={handleSubmit} listImplementos={implementos} listCapacitaciones={capacitaciones} />
  );
};

export default NewUsuario;