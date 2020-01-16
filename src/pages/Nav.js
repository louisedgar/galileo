import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    let navStyle = {
      textDecoration: "none",
      color: "#303030"
    };

    return (
      <nav>
        <div className="sidenav">
          <h3>Oeji</h3>
          <div className="menu">
            <p>Menu</p>
            <ul>
              <Link to="/dashboard" style={navStyle}>
                <li>Dashboard</li>
              </Link>
              <Link to="/soal" style={navStyle}>
                <li>Daftar Soal</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
