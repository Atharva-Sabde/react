import React from "react"
import "./TodoList.css"

class CompleteTask extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { completedTask, changeCompletion, changeDeletion } = this.props;

        return (
            <div className="completed-container container">
                <h4> Your Completed Tasks </h4>
                {
                    completedTask.map((item) => (
                        <div className="completed-card card">
                            <div className="card-style">
                                <h5>{item.taskname}</h5>
                                <p>{item.taskdesc}</p>
                                <button className='btn btn-primary' onClick={() => changeCompletion(item.id)}>Re-Do-Task</button>
                                <button className='btn btn-primary' onClick={() => changeDeletion(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}
export default CompleteTask;