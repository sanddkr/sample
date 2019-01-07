import * as React from 'react';
import { Component } from 'react';
import { Route, Switch,  BrowserRouter } from 'react-router-dom';
// import {Provider} from "react-redux";
// import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

// import configureStore,{history} from "./store";
import DeviceInfoContainer from 'pages/DeviceInfo/';
import LoginInfoContainer  from 'pages/Login/';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
   render() {
    // const store = configureStore();
    // console.log(store.getState())
    return (
          <div className='wrapper'>
            <Header />
            <div className="container">
              <BrowserRouter>
                <Switch>
                  <Route exact strict path="/" component={DeviceInfoContainer} />
                  <Route exact strict path="/login" component={LoginInfoContainer}/>
                  {/* <Route exact strict path="/planSlection" component={LoginInfoContainer}/> */}
            
                  <Route component={render => (<div>no data </div>)} />
                </Switch>
              </BrowserRouter>
              {/* <p>{this.state.name}</p>
              <DeviceInfoContainer myProp={this.state.name} myProp2={this.updateState} /> */}
            </div>
            <Footer />
          </div>
    );
  }
}

export default App;
