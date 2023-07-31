'use client';
import { useState, useEffect } from 'react';
import NotificacionForm from './NotificacionForm';
import { useParams, useRouter } from 'next/navigation';
import { createNotificacion } from '@/data/notificacionData';
import { getImplementos} from '@/data/implementoData';

const NewNotificacion = () => {
  const params = useParams();
const [notificacion, setNotificacion] = useState({
  brigadista: params.id
});
const [implementos, setImplementos] = useState([]);

useEffect(() => {
    getImplementos().then((res) => {
    {
        setImplementos(res.data);
        console.log(res.data);
    }
    });

},[]);;

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    try {
      await createNotificacion(notificacion);
      push(`/Brigadista/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NotificacionForm notificacion={notificacion} setNotificacion={setNotificacion} handleSubmit={handleSubmit} implementos={implementos}/>
  );
};

export default NewNotificacion;