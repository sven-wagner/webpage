import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Link, Route } from "wouter";
import PropTypes from 'prop-types'

//Logo
import LogoWeiss from '../logo/SWLogo2WRB.svg';

export default class Header extends Component {

    constructor() {
        super();

        this.getbgColor = this.getbgColor.bind(this);
    }

    getbgColor() {
        if (this.props.bg === true) {
            return "header-color"
        }
        else {
            return "header-transparent"
        }
    }

    render() {
        return (
            <div className="header">
                <nav className={`navbar navbar-dark navHeader w100 ${this.getbgColor()}`}>
                    <Link className="navbar-brand" to="/">
                        <img src={LogoWeiss} height="35" className="d-inline-block algin-top mr-3"></img>
                    </Link>
                    <ul className="nav nav-pills ">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/games'>SGames</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    bg: PropTypes.bool,
}
