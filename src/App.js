import React, { Component } from 'react';
import styled from "styled-components";
import Header from './header';
import Cards from './Cards';
import {Provider} from 'react-redux';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Cards />
        </div>
      </Provider>
    );
  }
}

export default App;
