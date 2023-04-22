import axios from "axios"
import { SetAuthUserData } from "../redux/authReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "8604cc03-3d58-4a45-8602-e011234bfbbf" }
})


export const GetUsers = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
    )
        .then(response => response.data)
}


export const Unfollow = (id) => {
    return (
        instance.delete(`follow/${id}`)
    )
        .then(response => response.data)
}


export const Follow = (id) => {
    return (
        instance.post(`follow/${id}`)
    )
        .then(response => response.data)
}

export const ProfileApi = {
     SetStatus(status) {
        return (
            instance.put(`profile/status/`, { status })
        )
            .then(response => response.data)
    },

    GetStatus(id) {
        return (instance.get(`profile/status/${id}`))
            .then(response => response.data)
    },

    GetUserRpofile(userid, func) {
        return (instance.get(`profile/ ${userid}`))
            .then(response => func? func(response.data): response.data);
    },
}
export const AuthApi = {
    Login(email, password, rememberMe) {
        return (

            instance.post(`auth/login/`, { email, password, rememberMe })
        )
            .then(response => response.data)
    },

    Logout() {
        return (instance.delete(`auth/login`))

            .then(response => response.data)

    },

    GetAuthUserData() {
        return (instance.get(`auth/me`))

            .then(response => response.data);
    }
}

