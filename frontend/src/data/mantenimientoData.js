import axios from '@/data/apiRoot';

export const getMantenimientos = async () => {
    try {
        const res = await axios.get('/Mantenimiento');
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
};


export const createMantenimiento = async (solicitud) => {
    try {
        const res = await axios.post('/Mantenimiento', solicitud);
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
};

export const getTiposMan = async () => {
    try {
        const res = await axios.get('/TipoMantenimiento');
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
};

