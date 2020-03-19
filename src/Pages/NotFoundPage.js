import React, { Component } from 'react'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="Page">
                <div className="row mt-3 justify-content-center">
                    <div className="col-5  bg-dark text-center text-white ">
                        <h1>ERROR. 404</h1>
                    </div>
                    <div className="col-4" />

                </div>
                <div className="bg-warning flex-row">
                    <div className="row justify-content-center">

                        <div className="col-6 text-white">
                            <h3>Seite konnte nicht gefunden werden<br/>Bitte überprüfen Sie die URL</h3>
                           
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
