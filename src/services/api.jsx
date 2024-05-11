import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/opinion_manager/v1',
    timeout: 1000
})

export const getBlogs = async() =>{
    try {
        return await apiClient.get('/publication')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}