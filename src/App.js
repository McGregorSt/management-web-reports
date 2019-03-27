import React, { Component } from 'react';
import './App.css';
import data from './db/app.json'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppJSX from './components/App'


class App extends Component {
  render() {
    return (
     <div >
       <AppJSX data={ data } />
     </div>
    );
  }
}

export default App;
