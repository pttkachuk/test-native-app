import axois from 'axios';

//baseURL
export const instance = axois.create({
    baseURL: 'https://bolla-app-7rgy.onrender.com/api',
});

export const setToken = token => {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.Authorization = '';
};

//currentUser
export async function currentUser() {
    const { data } = await instance.get('/auth/current');
    return data;
};

//loginUser
export async function loginUser(userData) {
    const { data } = await instance.post('/auth/login', userData);
    setToken(data.token);
    return data;
};

//logoutUser
export async function logOutUser() {
    const { data } = await instance.post('/auth/logout');
    clearToken();
    return data;
};

//resetPassword
export async function resetPassword(userData) {
    const { data } = await instance.patch('/auth/resetpassword', userData);
    return data;
};