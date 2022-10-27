import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Switch from "react-switch";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css'

const picture = new URL("../../../assets/favicon1.jpg", import.meta.url)
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(true)
    // console.log(user.photoURL);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='bg-purple-200'>
            <div className='h-6 w-6 md:hidden' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <Bars3Icon></Bars3Icon> :
                        <XMarkIcon></XMarkIcon>
                }
            </div>
            <div className={`navbar md:flex justify-between w-full bg-purple-200 ${open ? "hidden" : "block"}`}>

                <div className="flex flex-col md:flex-row gap-3 text-xl font-bold">
                    <img className='rounded-lg h-10' src={picture} alt="" />
                    <NavLink to='/home' className={`bg-gray-200 p-2 rounded-md normal-case text-xl ${({ isActive }) => {
                        return isActive ? "active" : undefined;
                    }}`}>ProLearners</NavLink>
                    <NavLink to='/courses'>Courses</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <NavLink to='blog'>Blog</NavLink>
                </div>
                <div className="flex flex-col md:flex-row gap-3 text-xl font-bold">
                    {
                        user?.uid ? <NavLink  onClick={handleLogout}>LogOut</NavLink> :
                            <>
                                <NavLink to='/login'>Login</NavLink>
                                <NavLink to='/register'>Register</NavLink>
                            </>
                    }

                    <Switch></Switch>
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