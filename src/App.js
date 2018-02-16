import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import Sidebar from './components/sidebar';
import SubmitForm from './components/submit-form';
import ClaimForm from './components/claim-form';
import SubmitTransactionResults from './components/submit-form-results';
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
                  <Route exact path="/submit" component={SubmitTransactionResults}/>
                  <Route exact path="/transaction/receive/:transactionId" component={ClaimForm}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }