import React from "react"

class PendingTask extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { pendingTask, changeCompletion } = this.props;
        return (
            <div className="pending-container container">
                <h4> Your Pending Tasks </h4>
                {
                    pendingTask.map((item) => (
                        <div className="pending-card card">
                            <div className="card-style">
                                <h5>{item.taskname}</h5>
                                <p>{item.taskdesc}</p>
                                <button className="btn btn-primary" onClick={() => changeCompletion(item.id)}> Completed</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}

export default PendingTask;