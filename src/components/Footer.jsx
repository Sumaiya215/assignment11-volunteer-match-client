import logo from '../assets/v3-logo.jpg'

const Footer = () => {
    return (
        <div className='max-w-full mx-auto  mb-10'>
            <footer className="footer bg-neutral text-neutral-content  p-10">
                <aside className='lg: ml-8'>
                    <img src={logo} className='w-12 rounded-full' alt="" />
                    <p className='text-base font-bold '>
                        Volunteer Match Ltd.
                        <br />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Sumaiya215/assignment11-volunteer-match-client" target="_blank" rel="noopener noreferrer">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.244c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.088-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.998.107-.775.42-1.304.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.54-1.524.117-3.176 0 0 1.01-.322 3.3 1.23a11.46 11.46 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.29-1.552 3.3-1.23 3.3-1.23.657 1.652.24 2.873.117 3.176.768.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .323.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sumaiya-aktar-sa35/" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M20.45 20.45h-3.55v-5.43c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.53h-3.55V9h3.4v1.56h.05a3.73 3.73 0 013.35-1.83c3.58 0 4.24 2.36 4.24 5.43v6.28zM5.35 7.59a2.06 2.06 0 112.06-2.06 2.06 2.06 0 01-2.06 2.06zm1.77 12.86H3.59V9h3.53v11.45zM22.46 0H1.54A1.54 1.54 0 000 1.54v20.92A1.54 1.54 0 001.54 24h20.92A1.54 1.54 0 0024 22.46V1.54A1.54 1.54 0 0022.46 0z" />
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/sumaiya.aktar.902467' target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;