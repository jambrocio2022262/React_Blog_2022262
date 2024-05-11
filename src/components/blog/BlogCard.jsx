import React, {useState} from "react";
import '../../styles/blogCard.css'

export const BlogCard = ({blogs})  =>{
    console.log('blogs en BlogCard: ',blogs)

    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleExpandedClick = index => {
        if(expandedIndex === index){
            setExpandedIndex(null)
        }else{
            setExpandedIndex(index)
        }
    }


    return(
        <div className="blog-card-container">
            {blogs.map((blog, index) =>(
                <div key={index} className="blog-card">
                    <div>
                        <img src={blog.imagenUrl} alt="Imagen de blog"/>
                    </div>
                    <div>
                        <label>Title:</label>
                        <div>{blog.title}</div>
                    </div>
                    <div>
                        <label>Category</label>
                        <div>{blog.category}</div>
                    </div>
                    {expandedIndex === index ? (
                       <div>
                            <label>Paragraph</label>
                            <div>{blog.paragraph}</div>
                       </div>
                    ) : (
                        <button onClick={() => handleExpandedClick(index)}>Más Información...</button>
                    )}
                </div>
            ))}
        </div>
    )
}