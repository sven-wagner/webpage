import React, { Component } from 'react'
import { ArrowDownCircle, ExclamationTriangle } from "react-bootstrap-icons";

import imghws from '../img/hws.png';
import imgsgl from '../img/sgameslauncher.png';
import imgangelsimulator from '../img/angelsinulator.png';
import imgtps from '../img/imgtps.png';
import imgbts from '../img/imgbts.png';

import imgSGamesLogo from '../logo/SGamesLogoLang.svg'

var ShowPage = 0;

export default class SGamesPage extends Component {
    constructor() {
        super();
        this.ClickProject = this.ClickProject.bind(this);
        this.ClickNews = this.ClickNews.bind(this);
    }


    ClickProject() {
        ShowPage = 0;
        this.forceUpdate()
    }

    ClickNews() {
        ShowPage = 1;
        this.forceUpdate()
    }

    getDate() {
        var date = new Date;
        return date.getFullYear();
    }


    render() {
        return (
            <div className="Page" >
                <div className="fvBB h500px text-white text-uppercase d-flex align-items-center ">
                    <div className="col d-flex justify-content-center pr-0">
                        <img className="fade-1" src={imgSGamesLogo} height="80px"></img>
                    </div>
                </div>
                <div className="mt-3 text-center text-uppercase">
                    <h1 className="dt">Spiele</h1>

                </div>
                <div className="d-flex justify-content-center mb-5 ">
                    <div className="col-xl-8 col-lg-9 col-sm-10 zoom">
                        <div className="shadow ro ">
                            <div className="row">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imghws} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <div className="row row-cols-2">
                                            <div className="col">
                                                <h3 className="card-title">Hand Wash Simulator</h3>

                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <ArrowDownCircle size="30" color="gray" onClick={() => alert("Download zurzeit nicht verfügbar")} />
                                            </div>
                                        </div>
                                        <p className="card-text">Meine Frage war es, ob es möglich ist mit Windows Forms ein Spiel zu entwickeln. Ich glaube, ich habe die Grenzen von Windows Forms erreicht. Aber es ist möglich damit ein Spiel zu erstellen. Es ist nur die Frage, welche Anforderungen man hat. Bei mir war es "nur" ein Hand Wash Simulator. Wie ich auf die Idee gekommen bin? Ich weiß es selber nicht mehr ganz so genau. Nur so viel, ich hatte sehr viel Langeweile. Das Spiel kann lange dauern. Habe es (Stand: 2020) noch nicht einmal durchgespielt. Aber es dauert ewig. Ihr könnt euch die aktuelle Version in SGamesLauncher herunterladen, for FREE!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mt-5 text-center text-uppercase">
                    <h1 className="dt">geplante Spiele</h1>

                </div>
                <div className="d-flex justify-content-center mb-5 ">
                    <div className="col-xl-8 col-lg-9 col-sm-10  zoom">
                        <div className="shadow ro ">
                            <div className="row">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imgangelsimulator} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h3 className="card-title">Fishing World</h3>
                                        <p className="card-text">Fishing World ist ein Angelsimulator welches mit Unity2D entwickelt wird. Dieses Spiel ist seit 2020 in der Entwicklung. Wann der Release folgt, ist noch unbekannt. Weitere Details werden aber noch kommen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-5 ">
                    <div className="col-xl-8 col-lg-9 col-sm-10  zoom">
                        <div className="shadow ro ">
                            <div className="row">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imgtps} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h3 className="card-title">TPS</h3>
                                        <p className="card-text">TPS (Abkürzung des Spielnamens) ist seit Februar 2021 in der Entwicklung. Daher kann ich noch nicht viel zu diesem Spiel sagen. Es wird in Unity3D entwickelt. Weitere Informationen sollen noch in diesem Jahr erscheinen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-5 ">
                    <div className="col-xl-8 col-lg-9 col-sm-10  zoom">
                        <div className="shadow ro ">
                            <div className="row">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imgbts} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h3 className="card-title">BTS</h3>
                                        <p className="card-text">BTS ist das bisher größte Vorhaben, was ich mir vorgenommen habe. Bis hier genauere Information kommen vergehen noch ein paar Jahre :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-5 text-center text-uppercase">
                    <h1 className="dt">Launcher</h1>

                </div>
                <div className="d-flex justify-content-center mb-3 ">
                    <div className="col-xl-8 col-lg-9 col-sm-10  zoom">
                        <div className="shadow ro ">
                            <div className="row">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imgsgl} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                    <div className="row row-cols-2">
                                            <div className="col">
                                                <h3 className="card-title">SGamesLauncher</h3>

                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <ExclamationTriangle size="30" color="red" className="mr-2" onClick={() => alert("Der SGamesLauncher wird nicht mehr ünterstütz")}/>
                                                <a href="https://github.com/sven-wagner/SGamesLauncherInstaller/archive/master.zip" target="_blank"><ArrowDownCircle size="30" color="black" /></a>
                                            </div>
                                        </div>
                                        <p className="card-text">Da ich mein erstes "Spiel" (Hand Wash Simulator) nicht einfach so an Freunden geben wollte, dachte ich mir, ich erstelle meinen eigenen Game Launcher. Tja, das ist daraus geworden. Innerhalb 3 Tagen habe ich den Launcher erstellt. Dort findet ihr alle meine Spiel(e) (Aktuell 1 Spiel). Meldet euch an und habt Spass 😃</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
