import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function AppFooter() {
    return (
        <div className="footer py-2">
            <div className="footer__top">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-5">
                            <h2>Let's Build something together</h2>
                        </div>
                        <div className="col-lg-4 col-0 desktop"></div>
                        <div className="col-lg-3 d-flex align-items-center justify-content-end mt-lg-0 mt-3">
                            <button className="book w-100">
                                Book your spot now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center mb-3">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className='mb-3'>
                            Building innovative products that meets
                            business demands and serves 
                            customers well.
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <h6 className='mb-3'>Quick Links</h6>
                        <NavLink to='/' className='link'>Home</NavLink>
                        <NavLink to='/services'  className='link'>About</NavLink>
                        <NavLink to='/portfolio'  className='link'>Projects</NavLink>
                    </div>
                    <div className="col-lg-2">
                        <h6 className='mb-3'>Company</h6>
                        <NavLink to='/services'  className='link'>About</NavLink>
                        <NavLink to='/contact'  className='link'>Contact</NavLink>
                        <NavLink to='/'  className='link'>Careers</NavLink>
                        <NavLink to='/'  className='link'>Press</NavLink>
                    </div>
                    <div className="col-lg-4">
                        <h6 className='mb-3'>Office</h6>
                        <div className="d-flex align-items-center mb-3">
                            <p className='mb-0'>Yaba, Lagos, Nigeria</p>
                        </div>
                        {/* <a href='tel:+2348024316781' className="d-flex align-items-center mb-3">
                            <p className='mb-0'>+234 802 431 6781</p>
                        </a> */}
                        <a href='mailto:veoctech@gmail.com' className="d-flex align-items-center mb-3">
                            <p className='mb-0'>veoctech@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFooter;