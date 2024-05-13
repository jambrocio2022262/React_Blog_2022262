import { useState } from "react";
import {getComentario as getComentarioRequest} from '../../services/api'

export const useComentario = () =>{
    const [comentarios, setComentarios] = useState([])

    const obtenerComentarios = async () =>{
        const comentarioData = await getComentarioRequest()
        if(comentarioData.error){
           console.log(comentarioData.e.response?.data || "Error al obtener los comentarios")
           return
        }
        console.log({comentarioData : comentarioData.data})
        setComentarios(comentarioData.data)

        return comentarioData.data
    }
    return{
        comentarios, obtenerComentarios
    }

}