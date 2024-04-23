import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="SideBar ">
                <img className='logo_png' src="https://myindianstove.com/wp-content/uploads/2021/01/RECIPES-ICON.png" />
                <div className="devider"></div>

                <div className="Items">
                    <NavLink className='nav-link linkee' to="/">All foods</NavLink>
                    <NavLink className='nav-link linkee' to="/create-recipe">Create food</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;