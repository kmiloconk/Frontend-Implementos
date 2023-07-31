'use client';
import { useState, useEffect } from 'react';
import UsuarioForm from '../../UsuarioForm';
import { useParams, useRouter } from 'next/navigation';
import { updateUsuario, getUsuarioById, getCapacitaciones} from '@/data/usuarioData';
import {getImplementos} from '@/data/implementoData'

const EditUsuario = () => {
    const params = useParams();
    const [usuario, setUsuario] = useState({
      rol:'646c60f4fc8acd4c18ab6d49'
    });
const [implementos, setImplemento] = useState([]);
const [capacitaciones, setCapacitacion] = useState([]);
useEffect(() => {
    getUsuarioById(params.id).then((res) => {
        {
          setUsuario(res.data);
        }
      });
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


  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    try {
      await updateUsuario(params.id,usuario);
      push('/Encargado/Brigadistas');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UsuarioForm usuario={usuario} setUsuario={setUsuario} handleSubmit={handleSubmit} listImplementos={implementos} listCapacitaciones={capacitaciones} />
  );
};

export default EditUsuario;