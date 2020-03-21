import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


//components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="flexbox">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect from='/games'to="/games"/>
          <Route path="/games" exact component={GamePage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
