import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Pages/Index/Index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={Index} />
            <Route path="/landing" component={Index} />
        </Switch>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
