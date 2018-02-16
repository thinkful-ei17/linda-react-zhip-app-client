import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import Sidebar from './components/sidebar';
import SubmitForm from './components/submit-form';
import ClaimForm from './components/claim-form';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

export default function App() {
    return (
      <Router>
      <div className="app">
          <Sidebar />
          <main>
            <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route exact path="/home" component={LandingPage}/>
                  <Route exact path="/submit" component={SubmitForm}/>
                  <Route exact path="/transaction/receive/:transactionId" component={ClaimForm}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }

                  /*<Route exact path="/initiate" component={SubmitForm}/>
                  <Route exact path="/retrieve" component={ClaimForm}/> 
                  <Route path="/balance/:userId" component={UserAccountBalance} exact/>
                  <Route path="/activity/:userId" component={UserHistory} exact/> */