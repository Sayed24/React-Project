import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './conmponents/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="containter">
            <NavbarBrand href="/">Nucamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default App;
