import React, { useState, useEffect } from "react";
import { BlogCard } from '../../components/blog/BlogCard';
import { NavBar } from '../../components/navbar/NavBar';
import { getBlogs } from '../../services/';
import SideBar from '../../components/sidebar/Sidebar'; // Cambiado de SideBar a Sidebar

export const DashbordPage = () => { // Cambiado DashboardPage a DashbordPage
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getBlogs();
                console.log('Data Obtenida Exitosamente: ', response.data);
                if (!response.error) {
                    setBlogs(response.data.publication || []);
                    console.log('blogs actualizados: ', response.data.publication);
                } else {
                    console.log('Error en data: ', response.data);
                }
            } catch (error) {
                console.log('Error en el fetching blogs: ', error);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div>
            <NavBar />
            <SideBar />
            <BlogCard blogs={blogs} />
        </div>
    );
};



