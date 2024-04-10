import React, { Component } from "react";

class Lottery extends Component {

  renderButton() {
    const {remaningTickets, actions} = this.props;

    if (remaningTickets > 0) {
      return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>
    }
  }

  render() {
    return (
      <>
        <h2>Лотария 1 от 69</h2>
        {this.renderButton()}
        <br />
        <small>оставащи: {this.props.remaningTickets}</small>
      </>
    );
  }
}

export default Lottery;