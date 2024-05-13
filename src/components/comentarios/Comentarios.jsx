import { useState } from 'react';
import '../../components/comentarios/comentario.css';
import '../../shared/hooks/useComentario.jsx'
import { json } from 'react-router-dom';


export const Comentarios = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const publicarComentario = async () => {
            const response = await fetch('http://localhost:8080/opinion_manager/v1/comment', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            if (!response.ok) {
                console.error('No se logro publicar')
                return
            }
            const resultado = response.json()
            console.log({resultado})
        }
        publicarComentario()
    };

    return (
        <div className="comentario-container">
            <h2>Deja un comentario</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Comentario:</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
                </div>
                <button type="submit">Enviar comentario</button>
            </form>
        </div>
    );
};
