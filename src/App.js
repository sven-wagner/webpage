import React, { Component } from 'react'
import './App.css';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Link, Route } from "wouter";


//components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import SGamesPage from './Pages/SGamesPage';
import qrPage from './Pages/qrPage';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            headerbg: false
        }

        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    listenScrollEvent() {
        if (window.scrollY >= 431) {
            this.setState({
                headerbg: true
            })
        }
        else {
            this.setState({
                headerbg: false
            })
        }
    }



    render() {
        return (
            // <BrowserRouter >
            //     <Header
            //         bg={this.state.headerbg}
            //     />
            //     <div id="flexbox">
            //         <Switch>
            //             <Redirect from="/games" to="/sgames" />
            //             <Route path="/" exact component={HomePage} />
            //             <Route path="/sgames" exact component={SGamesPage} />
            //             <Route path="/qrcode" exact component={qrPage} />
            //             <Route path="/" component={NotFoundPage} />
            //         </Switch>
            //         <Footer />
            //     </div>
            // </BrowserRouter>

            <div>
                <Header
                    bg={this.state.headerbg}
                />
                
                <Route path="/"  component={HomePage} />
                <Route path="/sgames"  component={SGamesPage} />
                <Route path="/qrcode" exact component={qrPage} />
                <Footer/>
            </div>
        )
    }
}
