import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Icon } from "react-materialize";

class NavbarComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="cyan lighten-3" alignLinks="right">
          <NavLink className="black-text" to="/">
            Dogs
          </NavLink>
          <NavLink className="black-text" to="/counter">
            Counter
          </NavLink>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
