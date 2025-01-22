import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.svg'
import Hamburger from 'hamburger-react'
import { Fragment, useState } from "react";

function NavBar() {

    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleIsOpen = ():void => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            <nav>
                <div className="container nav d-flex align-items-center justify-content-between">
                    <NavLink to='/' className='d-flex logo align-items-center nav-link'>
                        <img src={logo} alt="logo" />
                    </NavLink>

                    <div className="mid-links d-flex align-items-center">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/services' className='nav-link'>Services</NavLink>
                        <NavLink to='/academy' className='nav-link'>Academy</NavLink>
                        <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
                    </div>

                    <div className="right-links">
                        <button className="contact outline">Contact</button>
                    </div>

                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>

            {
                isOpen && (
                    <div className="backdrop mobile">
                        <aside>
                            <NavLink onClick={toggleIsOpen} to='/' className='nav-link'>Home</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/services' className='nav-link'>Services</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/academy' className='nav-link'>Academy</NavLink>
                            <NavLink onClick={toggleIsOpen} to='/portfolio' className='nav-link'>Portfolio</NavLink>
                        </aside>
                    </div>
                )
            }
        </Fragment>
    )
}

export default NavBar;