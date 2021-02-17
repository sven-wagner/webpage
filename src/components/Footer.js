import React, { Component } from 'react';

export default class Footer extends Component {

    getDate(){
        var date = new Date;
        return date.getFullYear();
    }

    render() {
        return (
            <div className="d-flex justify-content-center text-center mt-4">
            <p>©{this.getDate()} by Sven Wagner<br /><a className="text-dark" href="https://github.com/sven-wagner" target="_blank">GitHub🔗</a></p>

        </div>
        )
    }
}
