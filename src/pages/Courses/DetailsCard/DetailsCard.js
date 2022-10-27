import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const DetailsCard = () => {
    const courseDetails = useLoaderData();
    const { id, rating, total_student, title, price, image_url, details } = courseDetails;
    return (
        <div className='px-10'>
            <div className="rounded-xl bg-base-100 shadow-xl">
                <img className='w-full h-80 rounded-xl' src={image_url} alt="" />
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl my-4">{title}</h2>
                    <div className='flex flex-col items-center justify-center lg:flex-row justify-between font-bold text-xl my-3'>
                        <small>Price: $ {price}</small>
                        <small className='flex gap-2 items-center '><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>{rating}</small>
                        <small>Students: {total_student}</small>
                    </div>
                    <p className='text-xl'>{details}</p>
                </div>
                <Link to={`/courses/premium/${id}`}><button className='btn btn-outline btn-info my-10'>Get Premium Access</button></Link>
            </div>
        </div>
    );
};

export default DetailsCard;