import React, { Component } from 'react'
import Header from './components/Layout/Header'
import Contacts from './components/Contact/Contacts'
import { Providor } from './components/Context'
import EditContact from '../src/components/Contact/EditContact'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import About from '../src/components/Layout/About'
import Aux from '../src/Auxllary'
import NotFound from '../src/components/Layout/404'
import Test from '../src/components/Test/Test'
import AddContact from '../src/components/Contact/AddContact'


class App extends Component {
  render() {
    return (
      <Providor>
        <Router>
          <Aux>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route path="/contact/add" component={AddContact} />
                <Route path="/about" component={About} />
                <Route path='/test' component={Test}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Aux>
        </Router>
      </Providor>
    );
  }
}

export default App;
