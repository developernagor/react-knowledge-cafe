import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="mx-10 py-10">
            <h1>Blogs: {blogs.length}</h1>

            <div className="flex">
                <div className="w-2/3">Blog Item</div>
                <div className="w-1/3">Bookmarks</div>
            </div>

        </div>
    );
};

export default Blogs;