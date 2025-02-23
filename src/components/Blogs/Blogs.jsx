import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('posts.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="col-span-2">
            {
                blogs.map(blog=> <Blog
                     key={blog.id} 
                     blog={blog}
                     handleBookmarks={handleBookmarks}
                     handleMarkAsRead={handleMarkAsRead}
                     ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired,
}

export default Blogs;