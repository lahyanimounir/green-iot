import logoG from './logoG.svg';
import './App.css';
import Login from './components/login/Login';
import Devices from './components/devices/Devices';
import Bord from './components/bord/Bord';
import ListDevices from './components/listeDevices/ListDevices';
import { BrowserRouter, Route, Link, NavLink, withRouter, useLocation } from 'react-router-dom';

import React, { Component } from 'react'


export class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //     devices:[],
    //     products:[]
    // }
  
}

render() {
  // const currentURL = window.location.href.split('/')
  // console.log(currentURL)
  if(true){
    return (

      <div className="App h-100">
        {/* <header className="App-header">
          
        </header> */}
        {/* <Login /> */}
        {/* <img src={logo} /> */}
  
       <BrowserRouter>
          <div className="container-fluid px-0 h-100 mh-100">
            <div className="row mx-0 h-100 mh-100">
              <div className="col-2  px-0 black-background mh-100">
           
                <ul className="list-group">
                <li className="py-3 px-3 black-background px-2" >
                  <div>
                    <img className="img-fluid" src={logoG}  />
                    <span class="logoG px-3" >Green IOT</span>  
                  </div>
                  </li>
                  <NavLink exact to="/" className="black-background">
                  <li className="py-3 px-3  px-2" >
                    <span className="pr-2"><i class="fas fa-table"></i></span>  Tableau de bord
                  </li>
                  </NavLink>
                  <NavLink to="/devices" className="black-background">
                  <li className="py-3 px-3  px-2" >
                    <span className="pr-2"><i class="fas fa-tablet-alt"></i></span>  Listes Devices
                  </li>
                  </NavLink>
                  <NavLink to="/culture" className="black-background">
                  <li className="py-3 px-3  px-2" >
                    <span className="pr-2"><i class="fas fa-tractor"></i></span>  Listes culture
                  </li>
                  </NavLink>
                 
                </ul>
              </div>
              <div className="col-10 mt-5">
                <div className="container bg-ddd">
                  {/* <Devices /> */}
                  <Route exact path="/" component= {Bord} />
                 
                  <Route path="/devices" component= {ListDevices} />
                  <Route path="/culture" component= {Devices} />
                </div>
              </div>
            </div>
          </div>
          </BrowserRouter>
      </div>
    );

  }else{
    return (

      <div className="App h-100">
        {/* <header className="App-header">
          
        </header> */}
        {/*  */}
        {/* <img src={logo} /> */}
  
        <Login />
      </div>
    );
  }
  
}
}
export default App;
