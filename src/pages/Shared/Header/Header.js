import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const picture = new URL("../../../assets/favicon1.jpg", import.meta.url)
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-pink-100">
                <div className="flex-1 gap-3 text-xl font-bold">
                    <img className='rounded-lg h-10' src={picture} alt="" />
                    <Link to='/' className="bg-gray-200 p-2 rounded-md normal-case text-xl">ProLearners</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='blog'>Blog</Link>
                </div>
                <div className="flex-none gap-3 text-xl font-bold">
                    {
                        user?.uid ? <Link onClick={handleLogout}>LogOut</Link> :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.photoURL ? <img title={user?.displayName} src={user.photoURL} /> : <img src='https://image.shutterstock.com/shutterstock/photos/1214871721/display_1500/stock-vector-profile-photo-user-icon-1214871721.jpg' />
                                }
                                {/* <img src={user?.photoURL? user.photoURL : <FaUserAlt></FaUserAlt>} /> */}
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;