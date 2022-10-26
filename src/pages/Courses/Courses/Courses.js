import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../SignleCard/SingleCard';

const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='grid grid-cols-2 gap-5 w-full mx-auto'>
            {
                courses.map(course => <SingleCard key={course.id} course = {course}></SingleCard>)
            }
        </div>
    );
};

export default Courses;