import { Link } from 'react-router-dom';
import logo from '../assets/v3-logo.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('signout successful')
                toast.success('Logout successful')
            })
            .catch(error => console.log('ERROR', error.message))
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('Menu Toggled:', !isMenuOpen)
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className='min-h-28'>
            <div className="navbar bg-base-100 max-w-full mx-auto">
                <div className="flex-1">
                    <div className='flex gap-1 items-center'>
                        <img className='w-12' src={logo} alt="" />
                        <h3 className='font-bold text-xl'>VolunteerMatch</h3>
                    </div>
                </div>

                <div className="lg:hidden flex items-center gap-2">
                    <button className='btn btn-sm btn-ghost btn-circle'
                        onClick={toggleTheme}>
                        {theme === "light" ? (
                            <FaToggleOn className='text-2xl' />
                        ) : (
                            <FaToggleOff className='text-2xl' />

                        )}
                    </button>
                    <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* desktop menu */}

                <div className='hidden lg:flex  items-center gap-2'>
                    <button className='btn btn-sm btn-ghost '
                        onClick={toggleTheme}>
                        {theme === "light" ?
                            <FaToggleOn className='text-2xl' /> :
                            <FaToggleOff className='text-2xl' />}
                    </button>

                    <ul className=' menu menu-horizontal px-1 '>
                        <li className='mr-2 text-base font-bold'>
                            <Link to='/'>Home</Link></li>
                        <li className='mr-2 text-base font-bold'>
                            <Link to='/posts'> All Volunteer Need Posts</Link>
                        </li>
                        {
                            !user ? <li className='mb-2'>
                                <Link to='/login'>
                                    <button className='btn btn-primary btn-sm font-bold '>Login</button>
                                </Link>

                            </li> : <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"
                                        title={user.displayName} >

                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="image"
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 
                                       rounded-box z-[1] mt-3  p-2 shadow">
                                        <li>
                                            <button className='font-bold btn btn-sm btn-primary' onClick={handleSignOut}>Logout</button>
                                        </li>
                                    </ul>
                                </div>

                                <li>
                                    <details className='dropdown'>
                                        <summary className='btn btn-ghost font-bold ml-1'> My Profile </summary>
                                        <ul className='p-2 shadow bg-base-100 rounded-t-none'>
                                            <li className='text-base font-bold'>
                                                <Link to='/add-post'>Add Volunteer Need Post</Link>
                                            </li>
                                            <li className='text-base font-bold'>
                                                <Link to='/my-posts'>Manage my posts</Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden '>                  
                        <ul className='menu bg-base-100 p-4 shadow rounded-box'>
                            <li className='mb-2 text-base font-bold'>
                                <Link to='/'>Home</Link></li>
                            <li className='mb-2 text-base font-bold'>
                                <Link to='/posts'> All Volunteer Need Posts</Link>
                            </li>
                            {
                                !user ? (
                                    <li className='mb-2 text-base font-bold'>
                                        <Link to='/login'>
                                            <button className='btn btn-primary btn-sm '>
                                                Login
                                            </button>
                                        </Link>

                                    </li>
                                ) : <>
                                    <li className='mb-2 text-base font-bold'>
                                        <Link to='/add-post'>Add Volunteer Need Post</Link>
                                    </li>
                                    <li className='mb-2 text-base font-bold'>
                                        <Link to='/my-posts'>Manage My Posts</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleSignOut} className='btn btn-sm btn-primary text-base font-bold'>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            }
                        </ul>
                   
                </div>
            )}
        </div>
    );
};

export default Navbar;