import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>
            </div>
        );
    }
}
export default Nav;
