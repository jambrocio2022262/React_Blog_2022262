import React from "react";
import './sidebar.css'; // Importamos el archivo CSS local
import imagen from '../../assets/img/Personal.jpg'; // Importamos la imagen local

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={imagen} alt="Descripción de la imagen" className="sidebar-image" />
            <h2>Josue Sebastian Ambrocio Alvarado</h2>
            <p>¡Bienvenido al Blog Personal!</p>
            {"En este blog encontraremos diversos proyectos que a lo largo de mi carrera los hemos realizado, son proyectos que en estos 3 años nos han servido para crecer como personas, donde hemos pasado frustaciones, alegrias hemos cometido errores y hemos ido aprendiendo a lo largo de cada proyecto que realizamos, este blos nos ayudara para siempre tener un recuerdo de los proyectos que vamos a realizar, espero que sea de su agrado."
            
            }
        </div>
    );
};

export default Sidebar;



