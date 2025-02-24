import axios from 'axios';

//const backend_port = process.env.BACKEND_PORT

export const get_systems = () => axios({
    method: "get",
    url: `http://127.0.0.1:5050/get_all_systems`,
})

export const get_system = (label) => axios({
    method: "post",
    url: `http://127.0.0.1:5050/get_system`,
    data: label
})
    
export const get_selected_systems = (labels) => axios({
    method: "post",
    url: `http://127.0.0.1:5050/get_selected_systems`,
    data: labels
})

export const get_filtered_systems = (filters) => axios({
    method: "post",
    url: `http://127.0.0.1:5050/get_filtered_systems`,
    data: filters
})

export const get_statistics = (filters) => axios({
    method: "post",
    url: `http://127.0.0.1:5050/get_statistics`,
    data: filters
})

export const get_families= () => axios({
    method: "get",
    url: `http://127.0.0.1:5050/get_all_families`,
})

export const get_family = (familyId) => axios({
    method: "post",
    url: `http://127.0.0.1:5050/get_family`,
    data: { id: familyId }
})