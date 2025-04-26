import Hamburger from 'hamburger-react';
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg';

function NavBar() {

    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleIsOpen = ():void => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            <nav>
                <div className="container nav d-flex align-items-center justify-content-between">
                    <Hamburger toggled={isOpen} toggle={setOpen} />

                    <NavLink to='/' className='d-flex logo align-items-center nav-link'>
                        <img src={logo} className='img-fluid' alt="logo" />
                    </NavLink>

                    <div className="mid-links d-flex align-items-center">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/services' className='nav-link'>Services</NavLink>
                        <NavLink to='/about-us' className='nav-link'>About</NavLink>
                        {/* <NavLink to='/blog' className='nav-link'>Blog</NavLink>
                        <NavLink to='/careers' className='nav-link'>Careers</NavLink> */}
                        <NavLink to='/academy' className='nav-link'>Academy</NavLink>
                        <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
                    </div>

                    <div className="right-links">
                        <NavLink to='/contact-us'>
                            <button className="contact outline">Contact</button>
                        </NavLink>
                    </div>
                </div>
            </nav>

            {
                isOpen && (
                    <div className="backdrop mobile">
                        <aside>
                            <NavLink onClick={toggleIsOpen} to='/' className='nav-link'>Home</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/services' className='nav-link'>Services</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/about-us' className='nav-link'>About</NavLink>
                            {/* <NavLink onClick={toggleIsOpen} to='/blog' className='nav-link'>Blog</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/careers' className='nav-link'>Careers</NavLink> */}
                            <NavLink onClick={toggleIsOpen} to='/academy' className='nav-link'>Academy</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/portfolio' className='nav-link'>Porfolio</NavLink>
                            {/* <div className="d-flex justify-content-center">
                                <NavLink onClick={toggleIsOpen} to='/contactUs'>
                                    <button className="contact outline">Contact</button>
                                </NavLink>
                            </div> */}
                        </aside>
                    </div>
                )
            }
        </Fragment>
    )
}

export default NavBar;