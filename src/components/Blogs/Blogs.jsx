import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from 'prop-types';

const Blogs = ({addBookmark, handleMarkAsRead}) => {

    // Loading blogs data, so need related state. As the data are in an array so we will need an empty array

    const [blogs, setBlogs] = useState([]);

    // For loading data we will use useEffect

    useEffect(() => {
        fetch('blogs.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => 
                    <SingleBlog
                    key={blog.id} 
                    blog={blog}
                    addBookmark={addBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></SingleBlog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    addBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;