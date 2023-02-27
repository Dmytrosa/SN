import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "34000a0a-8661-49d6-8fb7-04c1af10a555" }
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
        debugger
        return (instance.get(`profile/status/${id}`))
        
        .then(response => response.data)
        
    }
}
