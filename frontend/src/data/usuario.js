import axios from '@/data/apiRoot';

export const login = async (email) => {
    const response = await axios.post(`${process.env.SERVIDOR}/auth/signin`, {
        email
    });
    return response
}

export const logout = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/logout`);
    return response
}

export const checkToken = async (token) => {
    const response = await axios.get(`${process.env.SERVIDOR}/checkToken`, { headers: { cookie: token } });
    return response
}

