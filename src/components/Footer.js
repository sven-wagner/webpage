import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    getDate(){
        var date = new Date;
        return date.getFullYear();
    }

    render() {
        return (
            <div id="footer" >
                <div className="text-center mt-3 mb-3">
                    <p>©{this.getDate()}<br/> • <a className="text-light" href="https://github.com/sven-wagner" target="_blank">GitHub</a> •</p>
                </div>
            </div>
        )
    }
}
