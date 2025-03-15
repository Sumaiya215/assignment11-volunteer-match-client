import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLottieData from '../assets/Lottie/login.json'
import Lottie from "lottie-react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const {signInUser,signInWithGoogle} = useContext(AuthContext); 
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        setLoginError('');

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            toast.success('Login Successful')
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log('ERROR', error.message);
            setLoginError(error.message);
        })
        
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error => console.log('ERROR', error.message));
    }


    return (
        <div className="hero bg-base-100 min-h-screen  mb-12">
            <Helmet>
                <title>Login | Volunteer Match</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-8">
                <div className="text-center  lg:text-left w-[640px]">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-[400px] shadow-2xl">
                <h3 className="text-3xl font-bold text-center mt-4">Login now!</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-sky-800 text-lg h-[60px] font-semibold text-white">Login</button>
                        </div>
                    </form>
                    <p className="ml-8 mb-4 font-semibold">
                        New to this website? please <Link className="text-blue-500" to="/register">Register</Link>
                    </p>

                    {
                        loginError && <p className="ml-8 mb-4 text-red-600">{loginError}</p>
                    }
                    <p className="text-center mb-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;