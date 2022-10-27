import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, userUpdateProfile} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({ name: "", url: "", email: "", password: "" })
    const[error, setError] = useState('')

    const handleName = (event) => {
        setUserInfo({ ...userInfo, name: event.target.value })
    }
    const handleURL = (event) => {
        setUserInfo({ ...userInfo, url: event.target.value })
    }
    const handleEmail = (event) => {
        setUserInfo({ ...userInfo, email: event.target.value })
    }
    const handlePassword = (event) => {
        setUserInfo({ ...userInfo, password: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(userInfo.name, userInfo.url, userInfo.email, userInfo.password);
        createUser(userInfo.email, userInfo.password)
        .then(result =>{
            const user = result.user;
            userUpdateProfile(userInfo.name, userInfo.url)
            .then(()=>{})
            .catch(error=>{
                console.log(error.message);
            })
            console.log(user);
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" value={userInfo.name} onChange={handleName} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="url" className="input input-bordered" value={userInfo.url} onChange={handleURL} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" value={userInfo.email} onChange={handleEmail} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" value={userInfo.password} onChange={handlePassword} required/>
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <span>Already have an account <Link to='/login' className='underline underline-offset-4'>log in</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;