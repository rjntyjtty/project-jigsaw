import React from 'react';
import Provider from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore } from 'redux'
import Root from './routes/index.js';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

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
