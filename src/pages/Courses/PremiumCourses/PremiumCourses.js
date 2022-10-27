import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourses = () => {
    const premiumCourse = useLoaderData();
    const { id, rating, total_student, title, price, image_url, details } = premiumCourse;
    return (
        <div className='lg:mt-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <img src={image_url} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default PremiumCourses;