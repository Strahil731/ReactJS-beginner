import React, { Component } from "react";
import "./App.css";
import { getRandomNumber } from "./Helper/utils";
import Lottery from "./Components/Lottery";
import { registerTicket } from "./Helper/actions";
import { removeTicket } from "./Helper/actions";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remaningTickets: 5,
      finished: false
    };

    this.registerTicket = registerTicket.bind(this);
    this.removeTicket = removeTicket.bind(this);
  }

  renderApp() {
    const { tickets, remaningTickets } = this.state;
    const actions = {};
    actions.registerTicket = this.registerTicket;

    return (
      <Lottery
        actions={actions}
        tickets={tickets}
        remaningTickets={remaningTickets} /
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