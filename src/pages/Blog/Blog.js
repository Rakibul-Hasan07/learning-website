import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogData = useLoaderData();
    console.log(blogData);
    return (
        <div className='grid grid-cols-2 gap-5 bg-slate-300'>
            {
                blogData.map(blog => <div key={blogData.id}>
                    <div>
                        <div className="bg-base-100 shadow-xl rounded-xl mt-10 lg:h-[300px]">
                            <div className="card-body">
                                <h2 className="card-title">{blog.question}</h2>
                                <p>{blog.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;