import React from "react"
import "./Ticket.css"

class Ticket extends React.Component {
    constructor(props) {
        super(props)      // super=> sets the data to parent class
        this.state = {
            tickets: this.props.data    // assigning the data to state.
        }
    }
    getPriorityClass = (priority) => {
        // const result= priority=="1"? "p1" : 
        return priority === 1 ? "p1"
            : priority === 2 ? "p2"
                : "p3";
    }
    changeResolveStatus = (itemId) => {
        // this.setState({tickets:!this.state.})
    }
    toggleUpdate = () => {
        this.setState({ update: !this.state.update })
    }
    
    render() {
        const { data } = this.props;
        return (
            <>
                <div className="header">
                    <h3 align='center'>---------- Ticket Raising App---------</h3>
                    <p align='center'>---------  Quickly analyse and prioritize your job  ---------</p>
                </div>
                {/* <div className="ticket-container">
                    <p> testing div</p>
                </div> */}


                <div className="ticket-container container">
                    <h4> All active Tickets</h4>
                    {
                        data.map((item) => (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className={`card ${this.getPriorityClass(item.priority)}`}>
                                            <h5>{item.description}</h5>
                                            <h6>ID: {item.ticketID} &nbsp;&nbsp;  Time: {item.timestamp}</h6>
                                            <p>Priority: {item.priority} &nbsp;&nbsp; open: {item.status}  </p>
                                            <button className="btn btn-primary" onClick={() => this.changeResolveStatus(item.tickedID)}> Resolve</button>
                                            {/* {console.log("data recieved")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))
                    }

                </div>

                <div className="footer">
                    <hr></hr>
                    <p> <b>made with ❤️ by <a href="https://github.com/Atharva-Sabde">Atharva Sabde </a> </b> </p>
                </div>
            </>
        )
    }

}
export default Ticket


