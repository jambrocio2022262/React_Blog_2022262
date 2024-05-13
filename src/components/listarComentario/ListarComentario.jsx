import { useComentario } from '../../shared/hooks/useComentario.jsx';
import './listarComentario.css'

export const ComentarioLista = () => {
    const { obtenerComentarios, comentarios } = useComentario()
    if (comentarios.length === 0) {
        obtenerComentarios();
        return (
            <div>
                Cargando...
            </div>
        )
    }
    console.log(comentarios)
    return (
        <div className='container-coment-card-list' >
            {
                comentarios.map((comentario) => {
                    return (
                        <div className='card-coment' key={comentario._id}>
                            <div className='text-small'>
                                <span>{comentario.nombre}</span>
                                <span>{comentario.email}</span>
                            </div>
                            <div>
                                {comentario.content}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}