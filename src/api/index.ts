import axios, { Axios, AxiosError } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('authToken');

    if (accessToken) {
        config.headers.Authorization = `Token ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (res) => {
        if (res.data?.errorMessage) {
            const errorMessage = res.data?.errorMessage;
            const error = new Error(errorMessage) as AxiosError;
            error.response = res;
            throw error;
        }
        return res;
    },
    (error) => {
        if (error instanceof AxiosError) {
            const message =
                error.response?.data?.errorMessage ||
                error.response?.data?.error ||
                error.message;
            error.message = message;

            if (error.response?.status === 401) {
                handleAuthError();
            }
        }

        throw error;
    },
);

function handleAuthError() {
}

export const apiGet = <T = unknown>(...args: Parameters<Axios["get"]>) => api.get<T>(...args).then((r) => r.data);
export const apiPost = <T = unknown>(...args: Parameters<Axios["post"]>) => api.post<T>(...args).then((r) => r.data);
export const apiDelete = <T = unknown>(...args: Parameters<Axios["delete"]>) =>
    api.delete<T>(...args).then((r) => r.data);
export const apiPatch = <T = unknown>(...args: Parameters<Axios["patch"]>) => api.patch<T>(...args).then((r) => r.data);
export const apiPut = <T = unknown>(...args: Parameters<Axios["put"]>) => api.put<T>(...args).then((r) => r.data);
export const apiRequest = <T = unknown>(...args: Parameters<Axios["request"]>) =>
    api.request<T>(...args).then((r) => r.data);

export default api;
