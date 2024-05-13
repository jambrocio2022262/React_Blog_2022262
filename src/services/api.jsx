import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.31.157:8080/opinion_manager/v1',
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

export const getComentario = async() =>{
    try {
        const resultado = await apiClient.get('/comment')
        console.log({resultado})
        return resultado
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

