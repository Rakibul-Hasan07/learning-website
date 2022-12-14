import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SignleCard/SingleCard';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
            {
                courses.map(course => <SingleCard key={course.id} course = {course}></SingleCard>)
            }
        </div>
    );
};

export default Courses;