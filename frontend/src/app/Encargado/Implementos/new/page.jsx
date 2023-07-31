'use client';
import { useState, useEffect } from 'react';
import ImplementosForm from '../ImplementoForm';
import { useParams, useRouter } from 'next/navigation';
import { createImplemento,getTipos,getEstados, getCategorias } from '@/data/implementoData';

const NewImplemento = () => {
const [implemento, setImplemento] = useState({});
const [tipos, setTipos] = useState([]);
const [estados, setEstado] = useState([]);
const [categorias, setCategoria] = useState([]);
useEffect(() => {
    getTipos().then((res) => {
    {
        setTipos(res.data);
        console.log(res.data);
    }
    });
    getEstados().then((res) => {
        {
        setEstado(res.data);
        console.log(res.data);
    }
    });
    getCategorias().then((res) => {
        {
        setCategoria(res.data);
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
      await createImplemento(implemento);
      push('/Encargado/Implementos');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImplementosForm implemento={implemento} setImplemento={setImplemento} handleSubmit={handleSubmit} tipos={tipos} estados={estados} categorias={categorias}/>
  );
};

export default NewImplemento;