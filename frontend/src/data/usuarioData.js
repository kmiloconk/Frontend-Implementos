import axios from '@/data/apiRoot';

export const getUsuarios = async () => {
  try {
    const res = await axios.get('/Usuario');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getUsuarioById = async (id) => {
  try {
    const res = await axios.get(`/Usuario/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createUsuario = async (usuario) => {
  try {
    const res = await axios.post('/Usuario', usuario);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateUsuario = async (id, usuario) => {
  try {
    const res = await axios.put(`/Usuario/${id}`, usuario);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsuario = async (id) => {
  try {
    const res = await axios.delete(`/Usuario/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getCapacitaciones = async () => {
  try {
    const res = await axios.get('/Capacitacion');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};