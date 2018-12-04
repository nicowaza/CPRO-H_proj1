import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Register from './components/Register';
import Users from './components/Users';
import Edit from './components/Edit';
import Details from './components/Details';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
     <BrowserRouter>
       <div>
         <Navbar />
         <Switch>
          <Route path="/" component={Users} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/details" component={Details} exact/>
          <Route path="/details/edit" component={Edit} exact/>
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;
