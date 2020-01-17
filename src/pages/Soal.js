import React, { Component } from "react";

class Soal extends Component {
  state = {
    data: [
      { id: 1, soal: "1", choice: "a1" },
      { id: 2, soal: "2", choice: "a1" },
      { id: 3, soal: "3", choice: "a1" },
      { id: 4, soal: "4", choice: "a1" },
      { id: 5, soal: "5", choice: "a1" },
      { id: 6, soal: "6", choice: "a1" },
      { id: 7, soal: "7", choice: "a1" },
      { id: 8, soal: "8", choice: "a1" },
      { id: 9, soal: "9", choice: "a1" },
      { id: 10, soal: "10", choice: "a1" },
      { id: 11, soal: "11", choice: "a1" },
      { id: 12, soal: "12", choice: "a1" },
      { id: 13, soal: "13", choice: "a1" },
      { id: 14, soal: "14", choice: "a1" },
      { id: 15, soal: "15", choice: "a1" }
    ],
    soal: { id: "", soal: "", choice: "" }
  };

  choose = (obj, evt) => {
    console.log("evtevt", evt);

    this.setState({ soal: { id: obj.id, soal: obj.soal, choice: obj.choice } });
  };

  componentDidMount = () => {
    if (this.state.data !== undefined) {
      this.setState({
        soal: { id: this.state.data[0].id, soal: this.state.data[0].soal },
        choice: this.state.data[0].choice
      });
    }
  };

  render() {
    return (
      <div className="soal-container">
        <h1>Daftar Soal</h1>
        <div className="soal">
          {this.state.soal.soal}
          <br />
          {this.state.soal.choice}
        </div>
        --------------------------------
        <div className="choices">
          {this.state.data.map(el => {
            return <button onClick={() => this.choose(el)}>{el.id}</button>;
          })}
        </div>
      </div>
    );
  }
}

export default Soal;
