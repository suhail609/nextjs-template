//REDUX-TOOLKIT
import { useDispatch } from "react-redux";
import { setUser, setList } from "./userSlice";
import { AppDispatch } from "./../index";
//NETWORK
import ApiRequest from "../../network/ApiRequest";
import { ApiEndpoints } from "../../network/ApiEndpoints";
//AXIOS
import { AxiosResponse, AxiosError } from "axios";


export const useUserActions = () => {
    const dispatch = useDispatch<AppDispatch>();


    const loginUser = async (data: any) => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.LOGIN.method,
                url: ApiEndpoints.LOGIN.url,
                data
            })
            .then((response: AxiosResponse) => {
                dispatch(setUser(response.data.data));
                return response;
            })
            .catch((error: AxiosError) => error)
    }

    const listUser = async () => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.USER_LIST.method,
                url: ApiEndpoints.USER_LIST.url
            })
            .then((response: AxiosResponse) => {
                dispatch(setList(response.data.data));
                return response;
            })
            .catch((error: AxiosError) => error)
    }

    const updateUser = async (data: any) => {
        return await ApiRequest()
            .request({
                method: ApiEndpoints.UPDATE_USER.method,
                url: ApiEndpoints.UPDATE_USER.url,
                data
            })
            .then((response: AxiosResponse) => {
                dispatch(setUser(response.data.data));
                return response;
            })
            .catch((error: AxiosError) => error)
    }

    const uploadUserPhoto = async (data: any) => {
        let formData = new FormData();
    
        Object.keys(data).forEach((key: string) => {
            formData.append(key, data[key]);
        });
    
        return await ApiRequest()
            .request({
                method: ApiEndpoints.UPLOAD_USER_PHOTO.method,
                url: ApiEndpoints.UPLOAD_USER_PHOTO.url,
                data: formData
            })
            .then((response: AxiosResponse) => response)
            .catch((error: AxiosError) => error)
    }


    return {
        loginUser,
        listUser,
        updateUser,
        uploadUserPhoto
    }
}