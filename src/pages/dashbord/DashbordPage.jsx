import React, {useState, useEffect} from "react";
import {BlogCard} from '../../components/blog/BlogCard'
import {NavBar} from '../../components/navbar/NavBar'
import {getBlogs} from '../../services/'

export const DashbordPage = () =>{
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        const fectchBlogs = async () =>{
            try {
                const response = await getBlogs()
                console.log('Data Obtenida Exitosamente: ', response.data)
                if(!response.error){
                    setBlogs(response.data.publication || [])
                    console.log('blogs actualizados: ', response.data.publication)
                }else{
                    console.log('Error en data: ', response.data)
                }
            } catch (error) {
                console.log('Error en el fetching blogs: ', error)
            }
        }
        fectchBlogs();
    }, [])

    return(
        <di>
            <NavBar/>
            <BlogCard blogs={blogs}/>
        </di>
    )
}