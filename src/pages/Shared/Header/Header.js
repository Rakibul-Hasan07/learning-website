import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user.photoURL);
    return (
        <div>
            <div className="navbar bg-pink-100">
                <div className="flex-1 gap-3 text-xl font-bold">
                    <Link to='/' className="bg-gray-200 p-2 rounded-md normal-case text-xl">ProLearners</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link  to='/faq'>FAQ</Link>
                    <Link to='blog'>Blog</Link>
                </div>
                <div className="flex-none gap-3 text-xl font-bold">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;