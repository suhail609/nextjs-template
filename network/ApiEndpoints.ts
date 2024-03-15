type ApiEndpointsType = {
    [key: string]: {
        method: 'POST' | 'DELETE' | 'GET' | 'PUT';
        url: string;
    };
};


export const ApiEndpoints: ApiEndpointsType = {
    LOGIN_USER: {
        method: "POST",
        url: "/abc/login"
    },
    LIST_USER: {
        method: "GET",
        url: "/xyz/list"
    },
    UPDATE_USER: {
        method: "PUT",
        url: "/ijk/update-profile"
    },
    UPLOAD_USER_PHOTO: {
        method: "POST",
        url: "/lmn/upload-user-photo"
    }
};