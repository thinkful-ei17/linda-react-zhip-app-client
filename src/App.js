import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import Sidebar from './components/sidebar';
import InitiateForm from './components/initiate-form';
import ClaimForm from './components/claim-form';
import PlaceholderContainer from './components/placeholder-container';
import InitiateTransactionContainer from './components/initiate-transaction-container';
import ClaimTransactionContainer from './components/claim-transaction-container';
import BalanceForm from './components/balance-form';
import BalanceContainer from './components/balance-container';
import ActivityForm from './components/activity-form';
import ActivityContainer from './components/activity-container';
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
                  <Route exact path="/r" component={PlaceholderContainer}/>
                  <Route exact path="/create" component={InitiateForm}/>
                  <Route exact path="/it" component={InitiateTransactionContainer}/>
                  <Route exact path="/transaction/receive/:transactionId" component={ClaimForm}/>
                  <Route exact path="/ct" component={ClaimTransactionContainer}/>
                  <Route exact path="/balance" component={BalanceForm}/>
                  <Route exact path="/ab" component={BalanceContainer}/>
                  <Route exact path="/activity" component={ActivityForm}/>
                  <Route exact path="/aa" component={ActivityContainer}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }