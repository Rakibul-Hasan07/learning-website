import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);
    // console.log(courses);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.map(course => <div key={course.id} className='border m-5 py-2 rounded-lg font-bold'>
                    <Link to={`courses/${course.id}`}>{course.name}</Link>
                </div>)
            }
        </div>
    );
};

export default LeftNav;