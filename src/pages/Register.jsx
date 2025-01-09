import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerLottieData from '../assets/Lottie/register.json'
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUser, setUser, signInWithGoogle} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async e => {
      
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        setErrorMessage('');
        // loading(true);

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            setErrorMessage('At least one uppercase, one lowercase and must be 6 characters or longer');
            return;
        }

       
        try {
            const result = await createUser(email, password)
            
            await updateUser(name, photo)
            setUser({
                ...result.user,
                displayName: name,
                photoURL: photo,
            })

            toast.success('User registration successful');
            navigate('/');

        } catch (error) {
            console.log(error)
            toast.error('User registration unsuccessful')

        } 
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('ERROR', error.message));
    }
 

    return (
        <div className="hero bg-base-100 min-h-screen mb-12">
            <Helmet>
                <title>Register | Volunteer Match</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[760px]">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h3 className="text-3xl text-center font-bold mt-6">Register now!</h3>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input type="password" name="password"
                                placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-sky-800 text-lg h-[60px] font-semibold text-white">Register</button>
                        </div>
                    </form>

                    {
                        errorMessage && <p className="text-red-600 ml-4 mb-4">{errorMessage}</p>
                    }

                    <p className="ml-8 mb-8 font-semibold">
                        Already have an account? please <Link className="text-blue-500" to="/login">Login</Link>
                    </p>

                    <p className="text-center mb-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;