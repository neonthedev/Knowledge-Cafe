import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

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
        </div>
    );
};

export default Blogs;