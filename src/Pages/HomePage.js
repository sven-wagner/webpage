import React, { Component } from 'react'

import imgGer from '../img/deu.jpg';
import imgNed from '../img/ned.png';
import imgeng from '../img/eng.jpg';

export default class HomePage extends Component {

    getDate() {
        var date = new Date;
        return date.getFullYear();
    }

    render() {
        return (
            <div className="Page" id="divHomePage">
               {/* <Header/> */}
                <div className="fvRB h500px text-white text-uppercase d-flex align-items-center ">
                    <div className="col d-flex justify-content-end pr-0">
                        <h5 className="mr-1 fade-1 text-right">Willkommen auf der Website von</h5>
                    </div>
                    <div className="col d-flex justify-content-start pl-0">
                        <h1 className="fade-2 ">Sven Wagner</h1>
                    </div>
                </div>
                <div className="mt-3 text-center text-uppercase">
                    <h1 className="dt">Über mich</h1>

                </div>
                <div className="d-flex justify-content-center pl-2 pr-2">
                    <div className="col-xl-8 col-lg-9 col-sm-10 ">
                        <div className="shadow ro ">
                            <div className="row  d-flex justify-content-center">
                                <div className="col ">
                                    <h1 className="d-flex justify-content-center mb-0 mt-2" title="Name">🦰</h1>
                                    <p className="d-flex justify-content-center">Sven Wagner</p>
                                </div>
                                <div className="col ">
                                    <h1 className="d-flex justify-content-center mb-0 mt-2" title="Geburtsdatum">🎂</h1>
                                    <p className="d-flex justify-content-center">27.06.2000<br />(Nürnberg)</p>
                                </div>
                                <div className="col ">
                                    <h1 className="d-flex justify-content-center mb-0 mt-2" title="Wohnort">🏠</h1>
                                    <p className="d-flex justify-content-center">Bunde</p>
                                </div>
                                <div className="col ">
                                    <h1 className="d-flex justify-content-center mb-0 mt-2" title="Beruf">💼</h1>
                                    <p className="d-flex justify-content-center">Softwareentwickler</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-center text-uppercase">
                    <h1 className="dt">Das kann ich</h1>

                </div>
                <div className="d-flex justify-content-center mb-5">
                    <div className="col-xl-8 col-lg-9 col-sm-10 ">
                        <div className="shadow ro pt-3 pb-3">
                            <div className="row mr-0 justify-content-center">
                                <div className="col-sm-9 col-lg-6 col-10">
                                    <p className="mb-0">Anwendungsentwicklung (C#)</p>
                                    <div className="progress mb-4" >

                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "45%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Webentwicklung (HTML, CSS, JavaScript, React)</p>
                                    <div className="progress mb-4" >

                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "59%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Spielentwicklung (Unity2D/Unity3D)</p>
                                    <div className="progress mb-4" >

                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "4%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Video Editing (Davinchi Resolve)</p>
                                    <div className="progress  mb-4" >

                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "52%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Animieren (Davinchi Resolve, Blender)</p>
                                    <div className="progress  mb-4" >

                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "49%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Modellieren (Blender)</p>
                                    <div className="progress mb-4" >
                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "10%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="mb-0">Designen (Affinity Designer)</p>
                                    <div className="progress  mb-4" >
                                        <div className="progress-bar header-color" role="progressbar" style={{ width: "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 text-center text-uppercase">
                    <h1 className="dt">Diese Sprachen spreche ich</h1>

                </div>
                <div className="d-flex justify-content-center mb-5">
                    <div className="col-xl-8 col-lg-9 col-sm-10">
                        <div className="shadow ro p-3">

                            <div className="row d-flex justify-content-center">
                                <div className="col mt-2 mb-2">
                                    <img className="mx-auto d-block" src={imgGer} height="60"></img>
                                </div>
                                <div className="col mt-2 mb-2">
                                    <img className="mx-auto d-block" src={imgNed} height="60"></img>
                                </div>
                                <div className="col mt-2 mb-2">
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
