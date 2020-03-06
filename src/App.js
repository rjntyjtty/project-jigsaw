import React from 'react';
import Provider from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore } from './store'
import Root from './routes/index.js';

// const store = createStore();

class App extends React.Component {

    render() {
        return (
          <Provider store={store}>
            <Router>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              <Switch>
                <Route path="/" component={Root} />
              </Switch>
            </Router>
          </Provider>
        );
    }

}

export default createStore(App);
