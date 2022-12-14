import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Result } from 'postcss';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { userLogin, googleSignIn, githubSIgnIn, resetPassword } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const [errorInfo, setErrorInfo] = useState({ loginError: "", googleError: "", gitHubError: "", resetError: "" })
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
        userLogin(loginInfo.email, loginInfo.password)
            .then(result => {
                const user = result.user;
                setErrorInfo("")
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
                setErrorInfo({ ...errorInfo, loginError: error.message })
            })
    }

    const handleGoogleSignin = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                setErrorInfo("")
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
                setErrorInfo({ ...errorInfo, googleError: error.message })
            })
    }

    const handleGithubSignin = () => {
        githubSIgnIn(githubProvider)
            .then(result => {
                const user = result.user;
                setErrorInfo("")
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
                setErrorInfo({ ...errorInfo, gitHubError: error.message })
            })
    }
    const handleResetPassword = () => {
        resetPassword(loginInfo.email)
            .then(() => {
                // alert("this is alert")
                toast("Send Reset Link Your Email Please Check Your Email or Span Email", {position: "top-center"});
                setErrorInfo("")
            })
            .catch(error => {
                setErrorInfo({ ...errorInfo, resetError: error.message })
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
                                <p className='text-red-500'>{errorInfo.loginError}</p>
                                <p className='text-red-500'>{errorInfo.googleError}</p>
                                <p className='text-red-500'>{errorInfo.gitHubError}</p>
                                <p className='text-red-500'>{errorInfo.resetError}</p>
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
                                    <Link href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
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
            <ToastContainer />
        </div>
    );
};

export default Login;