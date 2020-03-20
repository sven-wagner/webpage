import React, { Component } from 'react'

//Bilder
import imghws from '../img/hws.png';
import imgsgl from '../img/sgameslauncher.png';
import imgangelsimulator from '../img/angelsinulator.png';

export default class GamePage extends Component {

    constructor(){
        super();

        this.GetLauncher = this.GetLauncher.bind(this);
    }

    GetLauncher(){
        alert("kein Donwload vorhanden");
    }

    render() {
        return (
            <div>
                <div className="row w-100 ml-0">
                    <div className="col-lg-5 d-flex align-items-center bg-dark text-white pl-1 pr-0">
                        <div className="p-0 pl-0  mt-3 mb-3 ">
                            <img className="img-fluid mx-auto " src={imgsgl}></img>
                        </div>
                    </div>
                    <div className="col-lg-7 bg-dark text-white ml-0 pr-0 pt-5">
                        <div className="pl-0 pr-0 mb-4">
                            <h2 className="display-5">SGamesLauncher</h2>
                            <p className="lead">Da ich mein erstes "Spiel" (Hand Wash Simulator) nicht einfach so an Freunden geben wollte, dachte ich mir, ich erstelle meinen eigenen Game Launcher. Tja, das ist daraus geworden. Innerhalb 3 Tagen habe ich den Launcher erstellt. Dort findet ihr alle meine Spiel(e) (Aktuell 1 Spiel). Meldet euch an und habt Spass 😃</p>
                            <a href="https://github.com/sven-wagner/SGamesLauncherInstaller/archive/master.zip" target="_blank"><button type="button" className="btn btn-danger mt-2" >Downlaod SGamesLauncher v1.2.0</button></a>
                        </div>
                    </div>

                </div>

                <div className="row w-100 ml-0">
                    <div className="col-lg-7 bg-danger text-white ml-0 pr-0 pt-5">
                        <div className="pl-0 pr-0">
                            <h2 className="display-5">Hand Wash Simulator</h2>
                            <p className="lead">Meine Frage war es, ob es möglich ist mit Windows Forms ein Spiel zu entwickeln. Ich glaube, ich habe die Grenzen von Windows Forms erreicht. Aber es ist möglich damit ein Spiel zu erstellen. Es ist nur die Frage, welche Anforderungen man hat. Bei mir war es "nur" ein Hande Wash Simulator. Wie ich auf die Idee gekommen bin? Ich weiß es selber nicht mehr ganz so genau. Nur so viel, ich hatte sehr viel Langeweile. Das Spiel kann lange dauern. Habe es (Stand: 2020) noch nicht einmal durchgespielt. Aber es dauert ewig. Ihr könnt euch die aktuelle Version in SGamesLauncher herunterladen, for FREE!</p>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center bg-danger text-white pl-1 pr-0">
                        <div className="p-0 pl-0  mt-3 mb-3  ">
                            <img className="img-fluid" src={imghws}></img>
                        </div>
                    </div>
                </div>
                <div className="row w-100 ml-0">
                    <div className="col-lg-5  d-flex align-items-center bg-dark text-white pl-1 pr-0">
                        <div className="p-0 pl-0 mt-3 mb-3 ">
                            <img className="img-fluid" src={imgangelsimulator}></img>
                        </div>
                    </div>
                    <div className="col-lg-7 bg-dark text-white ml-0 pr-0 pt-5">
                        <div className="pl-0 pr-0">
                            <h2 className="display-5">Angel Simulator</h2>
                            <p className="lead">Nun will ich etwas neues Probieren. Mit der Unity Engine, möchte ich ein Angel Simulator erstellen. Genauere Infos werden noch folgen. Der Release ist für 2021 geplannt.</p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
