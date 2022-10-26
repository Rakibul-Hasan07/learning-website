import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCard = ({ course }) => {
    const { image_url, title, price, rating } = course;
    return (
        <div className='flex justify-evenly'>
            <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl border rounded-xl">
                <img className='w-full h-40 rounded-xl' src={image_url} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between font-bold'>
                        <small>Price: $ {price}</small>
                        <small className='flex gap-2 items-center'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>{rating}</small>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/courses/${course.id}`}><button className="btn btn-outline btn-primary">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;