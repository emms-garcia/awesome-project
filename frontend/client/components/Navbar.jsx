import React from 'react';
import { browserHistory, Link } from 'react-router';

const navRoutes = [
    { href: '/dashboard', name: 'Dashboard' },
    { href: '/library', name: 'Widget Library' },
];

const Navbar = () => {
    const logOut = () => {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
    };

    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='' className='brand-logo center'>Awesome Project</a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    {
                        navRoutes.map((route, idx) => {
                            const isActive = (route.href === window.location.pathname);
                            return (
                                <li className={isActive ? 'active' : ''} key={idx}>
                                    <Link to={route.href}>{route.name}</Link>
                                </li>
                            );
                        })
                    }
                    <li><a href='' onClick={logOut} >Log Out</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
