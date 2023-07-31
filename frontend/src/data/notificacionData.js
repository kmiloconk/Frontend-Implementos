import axios from '@/data/apiRoot';

export const getNotificaciones = async () => {
  try {
    const res = await axios.get('/Notificacion');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};


export const createNotificacion = async (solicitud) => {
  try {
    const res = await axios.post('/Notificacion', solicitud);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};



export const deleteNotificacion = async (id) => {
  try {
    const res = await axios.delete(`/Notificacion/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};