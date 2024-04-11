import React, { Component } from "react";

class LotteryTicket extends Component {
  render() {
    const { actions, index, color, number } = this.props;

    return (
      <div style={{ backgroundColor: color, padding: 5, width: "60%", margin: "auto" }}
        onClick={() => { actions.removeTicket(index) }}>
        <button style={{ float: "left" }}>X</button>
        <small>Това билетче има числото: <b>{number}</b></small>
      </div>
    );
  }
}

export default LotteryTicket;