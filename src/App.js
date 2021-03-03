import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './conmponents/DirectoryComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="containter">
            <NavbarBrand href="/">Nucamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
    );
  }
}

export default App;
