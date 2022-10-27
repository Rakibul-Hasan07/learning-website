import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const handleEmail = (event) => {
        setLoginInfo({ ...loginInfo, email: event.target.value })
    }
    const handlePassword = (event) => {
        setLoginInfo({ ...loginInfo, password: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginInfo.email, loginInfo.password);
        userLogin(loginInfo.email, loginInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" value={loginInfo.email} onChange={handleEmail} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" value={loginInfo.password} onChange={handlePassword} />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <span>Are you new here <Link to='/register' className='underline underline-offset-4'>register</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;