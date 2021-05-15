import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { Route, Switch } from 'react-router';
import InitialPage from './components/InitialPage/InitialPage';
import ProfileContainer from './components/ProfileContainer/ProfileContainer';
import NotFounded from './components/NotFounded/NotFounded';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="container">
          <Switch>
            <Route exact path="/" render={ () => <InitialPage/> }/>
            <Route path="/users" render={ () =>  <ProfileContainer/>}/>  
            <Route path="/" render={ () => <NotFounded title="404 - not found" /> }/>
          </Switch>    
      </div>
    </div>
  );
}

export default App;