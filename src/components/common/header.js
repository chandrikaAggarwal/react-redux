import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    const active = { color: '#ff0000' };

    return (
        <nav>
            <NavLink exact to="/" activeStyle={active} >Home</NavLink>{" | "}
            <NavLink to="/about" activeStyle={active} >About</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={active}>Courses</NavLink>
        </nav>
    );
};

export default Header;