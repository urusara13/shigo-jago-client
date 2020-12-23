import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div class="logo"><Link to="/">쉬고자고</Link></div>
                <div class="menu">
                    <ul>
                    <li><Link to="/user/login">Login / Register</Link></li>
                    <li><Link to="/user/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav