import React from 'react';
import './App.css';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';


//components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import NotFoundPage from './Pages/NotFoundPage';
import SGamesPage from './Pages/SGamesPage';

function App() {
  return (
    <HashRouter >
      <Header />
      <div id="flexbox">
        <Switch>
          <Redirect from="/games" to="/sgames"/>
          <Route path="/" exact component={HomePage} />
          <Route path="/games" exact component={GamePage} />
          <Route path="/sgames" exact component={SGamesPage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
