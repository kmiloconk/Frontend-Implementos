import axios from '@/data/apiRoot';

export const getImplementos = async () => {
  try {
    const res = await axios.get('/Implemento');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getImplemento = async (id) => {
  try {
    const res = await axios.get(`/Implemento/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createImplemento = async (implemento) => {
  try {
    const res = await axios.post('/Implemento', implemento);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateImplemento = async (id, implemento) => {
  try {
    const res = await axios.put(`/Implemento/${id}`, implemento);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteImplemento = async (id) => {
  try {
    const res = await axios.delete(`/Implemento/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getTipos = async () => {
  try {
    const res = await axios.get('/Tipo');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getCategorias = async () => {
  try {
    const res = await axios.get('/Categoria');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getEstados = async () => {
  try {
    const res = await axios.get('/Estado');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};