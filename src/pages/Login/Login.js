import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { userLogin, googleSignIn, githubSIgnIn } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
                navigate(from, {replace: true});
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogleSignin = () => {
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handleGithubSignin = () => {
        githubSIgnIn(githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
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
                            <div className="form-control mt-4">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleGoogleSignin} className="btn btn-outline btn-secondary"><FaGoogle className='text-black m-2'></FaGoogle> Google login</button>
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleGithubSignin} className="btn btn-outline btn-secondary"><FaGithub className='text-black m-2'></FaGithub> GitHub Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;