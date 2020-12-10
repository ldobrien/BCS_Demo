import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";

class NavbarComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="cyan lighten-3" alignLinks="right">
          <NavLink className="black-text" to="/">
            Home
          </NavLink>
          <NavLink className="black-text" to="/page1">
            Page1
          </NavLink>
          <NavLink className="black-text" to="/page2">
            Page2
          </NavLink>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
