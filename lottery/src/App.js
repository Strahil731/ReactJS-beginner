import React, { Component } from "react";
import "./App.css";
import { getRandomNumber } from "./Helper/utils";
import Lottery from "./Components/Lottery";
import { registerTicket } from "./Helper/actions";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remaningTickets: 5,
      finished: false
    };

    this.remaningTicket = registerTicket.bind(this);
  }

  renderApp() {
    const actions = {};
    actions.registerTicket = this.remaningTicket;

    return (
      <Lottery
        actions={actions}
        remaningTickets={this.state.remaningTickets} /
      >
    );
  }

  render() {
    console.log(this.state.tickets);
    return (
      <div className="App">
        {this.renderApp()}
      </div>
    );
  }
}

export default App;