import React, { Component } from "react";
import LotteryTicket from "./LotteryTicket";

class Lottery extends Component {

  renderButton() {
    const { remaningTickets, actions } = this.props;

    if (remaningTickets > 0) {
      return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>
    }
  }

  renderTickets() {
    const { tickets, actions } = this.props;
    const lotteryTicketAction = { removeTicket: actions.removeTicket }

    const lotteryTickets = tickets.map((ticket, index) => {
      return (
        <LotteryTicket actions={lotteryTicketAction} color={ticket.color} number={ticket.number} index={index} key={index} />
      );
    });

    return lotteryTickets;
  }

  render() {
    return (
      <>
        <h2>Лотария 1 от 69</h2>
        {this.renderButton()}
        <br />
        <small>оставащи: {this.props.remaningTickets}</small>
        <br />
        <hr />
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery;