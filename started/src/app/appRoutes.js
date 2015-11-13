/**
 * Created by pomy on 15/11/13.
 */

import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import AppRoot from './components/AppRoot';
import About from './components/About';
import NoMatch from './components/NoMatch';

class AppRoutes extends Component {
    render(){
        console.log(this.props.state);
        return (
            <Router history = 'createBrowserHistory'>
                <Route path = '/' component = {AppRoot}>
                    <Route path = '/about' component = {About} />
                    <Route path = '*' component = {NoMatch} />
                </Route>
            </Router>
        )
    }
}

export default AppRoutes;