import React, { Component } from 'react'

import imghws from '../img/hws.png';
import imgsgl from '../img/sgameslauncher.png';
import imgangelsimulator from '../img/angelsinulator.png';

import imgSGamesLogo from '../logo/SGamesLogoLang.svg'
import imgSGamesLauncherLogo from '../logo/SGamesLauncherLogo.svg'

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

    render() {
        return (
            <div className="Page" id="divSGamesPage">
                <div className="text-center mt-5">
                    <img src={imgSGamesLogo} height="100px"></img>
                </div>
                <div className="text-center mt-3">
                    <button type="button" onClick={this.ClickProject} className="btn btn-outline-danger ml-1 mr-1">Projekte</button>
                    <button type="button" onClick={this.ClickNews} className="btn btn-outline-info ml-1 mr-1">Neues</button>
                </div>
                {ShowPage == 0 &&
                    <div>
                        <div className="card bg-danger mt-3 mx-auto" style={{ maxWidth: '1000px' }}>
                            <div className="row text-white ">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img " src={imgsgl} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">SGamesLauncher</h5>
                                        <p className="card-text">Da ich mein erstes "Spiel" (Hand Wash Simulator) nicht einfach so an Freunden geben wollte, dachte ich mir, ich erstelle meinen eigenen Game Launcher. Tja, das ist daraus geworden. Innerhalb 3 Tagen habe ich den Launcher erstellt. Dort findet ihr alle meine Spiel(e) (Aktuell 1 Spiel). Meldet euch an und habt Spass 😃</p>
                                        <a href="https://github.com/sven-wagner/SGamesLauncherInstaller/archive/master.zip" target="_blank"><button type="button" className="btn btn-dark mt-2" >Downlaod SGamesLauncher v1.2.0</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-danger mt-3 mx-auto" style={{ maxWidth: '1000px' }}>
                            <div className="row text-white">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img" src={imghws} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">Hand Wash Simulator</h5>
                                        <p className="card-text">Meine Frage war es, ob es möglich ist mit Windows Forms ein Spiel zu entwickeln. Ich glaube, ich habe die Grenzen von Windows Forms erreicht. Aber es ist möglich damit ein Spiel zu erstellen. Es ist nur die Frage, welche Anforderungen man hat. Bei mir war es "nur" ein Hand Wash Simulator. Wie ich auf die Idee gekommen bin? Ich weiß es selber nicht mehr ganz so genau. Nur so viel, ich hatte sehr viel Langeweile. Das Spiel kann lange dauern. Habe es (Stand: 2020) noch nicht einmal durchgespielt. Aber es dauert ewig. Ihr könnt euch die aktuelle Version in SGamesLauncher herunterladen, for FREE!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-danger mt-3 mb-3 mx-auto" style={{ maxWidth: '1000px' }}>
                            <div className="row text-white">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex align-items-center">
                                    <img className="card-img " src={imgangelsimulator} ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">Angel Simulator</h5>
                                        <p className="card-text">Nun will ich etwas neues Probieren. Mit der Unity Engine, möchte ich ein Angel Simulator erstellen. Genauere Infos werden noch folgen. Der Release ist für 2021 geplannt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {ShowPage == 1 &&
                    <div>
                        <div className="card bg-info mt-3 mx-auto" style={{ maxWidth: '1000px' }}>
                            <div className="row text-white ">
                                <div className="col-md-4 mt-2 ml-2 mb-2 mr-2 d-flex flex-wrap align-items-center">
                                    <img className="card-img " src={imgSGamesLogo} height="50px" ></img>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <p className="mb-0">31.05.2020</p>
                                        <h5 className="card-title mt-0 mb-3">SGames bekommt neues Logo</h5>
                                        <p className="card-text">Nach fast einem Jahr wird das Logo von SGames angepasst. Der SGamesLauncher wird ebenfalls ein neues Design bekommen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
