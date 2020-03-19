import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Logo
import LogoWeiss from '../logo/SWLogoWeiss.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navHeader">
                <Link className="navbar-brand" to="/">
                        <img src={LogoWeiss} height="35" className="d-inline-block algin-top"></img>
                    </Link>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/games'>Games</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
