import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Pages/Index/Index';
import Result from './Pages/Result/index';
import * as serviceWorker from './serviceWorker';
import apiService from './Services/ApiService';
import { Route, Switch } from 'react-router-dom';
import ServerError from './Pages/500/index';
import { Provider } from 'react-redux';
import store, { history } from './Store/store';
import { ConnectedRouter } from 'connected-react-router';
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/" component={Index} />
                <Route path="/landing" component={Index} />
                <Route path="/result" component={Result} />
                <Route path="/500" component={ServerError} />
                <Route component={apiService} />
            </Switch>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
