import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: ""
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input id="name" value={this.state.name} onChange={this.handleInput} type="text" placeholder="Име" autoComplete="off" />
          <input id="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="Имейл" autoComplete="off" />
          <br />
          <select id="gender" value={this.state.gender} onChange={this.handleInput}>
            <option value=""></option>
            <option value="мъж">Мъж</option>
            <option value="жена">Жена</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Потвърди" />
        </form>
        <hr />
        <div className="result">
          <p>Име: <b>{this.state.name}</b></p>
          <p>Имейл: <b>{this.state.email}</b></p>
          <p>Пол: <b>{this.state.gender}</b></p>
        </div>
      </div>
    );
  }
}

export default App;