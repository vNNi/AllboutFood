import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Pages/Index/Index';
import Result from './Pages/Result/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServerError from './Pages/500/index';
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact={true} path="/" component={Index} />
            <Route path="/landing" component={Index} />
            <Route path="/result" component={Result} />
            <Route path="/500" component={ServerError} />
        </Switch>
    </Router>

    , document.getElementById('root'));
serviceWorker.unregister();
