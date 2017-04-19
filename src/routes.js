import React from 'react';
import { IndexRoute } from 'react-router';
import { MainApp } from './store/configStore';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import ChartPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import { Router } from 'react-router';

export default (
  <Router>
    <Router path="/" component={MainApp}>
      <IndexRoute component={LoginPage} />
      <Router path="dashboard" component={Dashboard} />
      <Router path="chart" component={ChartPage} />
      <Router path="table" component={TablePage} />
      <Router path="*" component={NotFoundPage} />
    </Router>
  </Router>
);
