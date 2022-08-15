import React from "react"
import "./Ticket.css"

class Ticket extends React.Component {
    constructor(props) {
        super(props)      // super=> sets the data to parent class
        this.state = {
            tickets: this.props.data    // assigning the data to state.
        }
    }
    getPriorityClass = (priority) => {   // sets the CSS className for color change
        // const result= priority=="1"? "p1" : 
        return priority === 1 ? "p1"
            : priority === 2 ? "p2"
                : "p3";
    }
    changeResolveStatus = (itemId) => {   // changing the status of ticket
        const result = this.state.tickets.find((item) => item.ticketID === itemId)

    }

    render() {
        const { data } = this.props;
        return (
            <>
                <div className="header">
                    <h3 align='center'>---------- Ticket Raising App---------</h3>
                    <p align='center'>---------  Quickly analyse and prioritize your job  ---------</p>
                </div>



                <h4> All active Tickets</h4>
                <div className="container ticket-container ">
                    <div className="row justify-content-cent">
                        {
                            data.map((item) => (

                                <div className="col-md-4">
                                    <div className={`card ${this.getPriorityClass(item.priority)}`}>
                                        <h5>{item.description}</h5>
                                        <span> <i class="fa-light fa-message-check"></i></span>

                                        <h6>ID: {item.ticketID} &nbsp;&nbsp;  Time: {item.timestamp}</h6>
                                        <p>Priority: {item.priority} &nbsp;&nbsp; open: {item.status}  </p>
                                        <button className="btn btn-primary" onClick={() => this.changeResolveStatus(item.tickedID)}>
                                            Resolve {"        "}
                                            <i class="fas fa-thin fa-check" style={{ marginLeft: '.9rem' }} >  </i>
                                        </button>
                                        {/* {console.log("data recieved")} */}
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>

                <div className="footer">
                    <hr></hr>
                    <p> Ticket Making app </p>
                    <p> <b>made with ❤️ by <a href="https://github.com/Atharva-Sabde">Atharva Sabde </a> </b> </p>
                </div>
            </>
        )
    }

}
export default Ticket


