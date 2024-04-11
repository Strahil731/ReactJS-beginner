import { getRandomColor, getRandomNumber } from "./utils";

export function registerTicket() {
    const newTicket = {
        number: getRandomNumber(),
        color: getRandomColor()
    };

    this.setState((prevState) => {
        prevState.tickets.push(newTicket);
        return {
            tickets: prevState.tickets,
            remaningTickets: --prevState.remaningTickets
        }
    });
}

export function removeTicket(index) {
    this.setState((prevState) => {
        prevState.tickets.splice(index, 1);

        return {
            tickets: prevState.tickets,
            remaningTickets: ++prevState.remaningTickets
        };
    });
}