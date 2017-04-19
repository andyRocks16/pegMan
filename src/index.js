/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute } from 'react-router';
import routes from './routes';
import LoginPage from './containers/LoginPage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { configureStore, MainApp } from './store/configStore';
import { Provider } from 'react-redux';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

const store = configureStore();

render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Router path="/" component={MainApp}>
            <IndexRoute component={LoginPage}>
            </IndexRoute>
        </Router>
    </Router>
</Provider>, document.getElementById('app')
);
