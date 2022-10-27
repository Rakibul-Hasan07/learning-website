import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className='main-container flex justify-center items-center'>
            <div className='img-section'>
                <h1 className='font-bold text-4xl text-orange-700'>Welcome To ProLearners Comunity!</h1>
                <Link to="/courses"><button className='btn btn-secondary mt-10 px-10'>See Courses</button></Link>
            </div>
        </div>
    );
};

export default Home;