//ENVIRONMENTS
import { API_INSTANCE } from "./Environments";
//AXIOS
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";


const logout = (): void => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/auth/login";
}


export default function ApiRequest(): AxiosInstance {
    const request = axios.create({
        baseURL: API_INSTANCE,
        headers: {
            Authorization: `Bearer ${
                localStorage.getItem("accessToken")
                      ? localStorage.getItem("accessToken")
                      : null
            }`,
        },
        responseType: "json",
        socketPath: null
    });

    request.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.code === "ERR_NETWORK") {
                return Promise.reject(error);
            }

            if (error?.response?.status === 401) {
                // UNAUTHORIZED
                logout();
            }

            if (error?.response?.status === 403) {
                // FORBIDDEN
                logout();
                return;
            }

            return Promise.reject(error.response);
        }
    );

    return request;
}