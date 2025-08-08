import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
});

export const useApi = () => {
    const get = async (url: string) => {
        const response = await api.get(url);
        return response.data;
    };

    const post = async (url: string, data: any) => {
        const response = await api.post(url, data);
        return response.data;
    };

    const setHeader = (key: string, value: string) => {
        api.defaults.headers.common[key] = value;
    };

    return { get, post, setHeader };
};
