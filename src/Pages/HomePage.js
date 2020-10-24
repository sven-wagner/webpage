import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import imgGer from '../img/deu.jpg';
import imgNed from '../img/ned.png';
import imgeng from '../img/eng.jpg';

//bg Colors Gradent #100C28, #252552

export default class HomePage extends Component {
    render() {
        return (
            <div className="Page" id="divHomePage">
               
                <div className="row mr-0 mt-3 justify-content-center">
                    <div className="col-4" />
                    <div className="col-md-5  bg-dark text-center text-white ">
                        <h1>Das bin ich</h1>
                    </div>

                </div>
                <div className="bg-danger flex-row">
                    <div className="row mr-0 justify-content-center">

                        <div className="col-6 text-white">
                            <h3>Name:</h3>
                            <p>Sven Wagner</p>
                            <h3>Geboren:</h3>
                            <p>27.06.2000 in Nürnberg</p>
                            <h3>Wohnorte:</h3>
                            <p>2000-2006 Wendelstein<br />2006-2011 Roth<br />2011-2015 Zuidlaren (NL)<br />2015-heute Bunde</p>
                            <h3>Hobbys:</h3>
                            <p>Anwendungsentwicklung<br />Webentwicklung<br />Video Editing<br />Animieren<br />Designen</p>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center mt-3 mr-0">
                    <div className="col-md-5  bg-dark text-center text-white ">
                        <h1>Das kann ich</h1>
                    </div>
                    <div className="col-4" />

                </div>
                <div className="bg-info flex-row mr-0">
                    <div className="row mr-0 justify-content-center">
                        <div className="col-6 text-white">
                            <p className="mb-0">Anwendungsentwicklung</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "45%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Webentwicklung</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-dark" role="progressbar" style={{ width: "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Video Editing</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "67%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Animieren</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Designen</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="mb-0">Schätzen</p>
                            <div className="progress mb-4" >

                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "5%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p>Angaben ohne Gewähr. Alle Angaben basieren auf eigene Schätzungen, da das nicht mein größtes Talent ist, können die echten Werte etwas abweichen.</p>
                        </div>
                    </div>
                </div>
                <div className="row mr-0 justify-content-center mt-3">
                    <div className="col-2" />
                    <div className="col-md-5  bg-dark text-center text-white ">
                        <h1>Diese Sprachen spreche ich</h1>
                    </div>
                </div>

                <div className="bg-success flex-row">



                    <div className="row mr-0 justify-content-center">
                        <div className="col-6 text-white mt-4 mb-4">
                            <div className="row mr-0 justify-content-md-center">

                                <div className="col-md-4 mb-3">
                                    <img className="mx-auto d-block" src={imgGer} height="60"></img>
                                </div>


                                <div className="col-md-4 mb-3">
                                    <img className="mx-auto d-block" src={imgNed} height="60"></img>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <img className="mx-auto d-block" src={imgeng} height="60"></img>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
