import React from 'react';
import UserRegister from './components/user-register';
import AppBarNavigation from './components/layouts/AppBarNavigation';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/login';
import News from './components/news';

class App extends React.Component {

  render(){
    return (
      <Router>
          <div>
              <AppBarNavigation/>
              <Route exact path="/register" component={UserRegister} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/news" component={News}/>
              <Redirect from="/" to="register"/>
          </div>
      </Router>
    );
  }
}

export default App;
