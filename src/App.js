import React, { Component } from 'react';
import Login from './component/login/login'
import Register from './component/register_user/register_user'
import Dashboard from './component/Dashboard/Dashboard'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />          
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
