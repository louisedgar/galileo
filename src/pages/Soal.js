import React, { Component } from "react";
import { image } from "../assets/background-uji.svg";

class Soal extends Component {
  render() {
    return (
      <div className="soal-container">
        <h1>Daftar Soal</h1>
        <img src={{ image }} alt=""></img>
      </div>
    );
  }
}

export default Soal;
