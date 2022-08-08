import React from "react"
import PendingTask from "./PendingTask"
import CompleteTask from "./CompleteTask"

import "./TodoList.css"

import Trash from "./Trash"
import data from "./ToDoDB";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: this.props.data
        }
    }
    getPendingItems = () => {
        const result = this.state.tasks.filter((item) => item.completion === false)
        return result;
    }
    getCompletedItems = () => {
        const result = this.state.tasks.filter((item) => item.completion === true)
        return result;
    }
    getDeletedItems = () => {
        const result = this.state.tasks.filter((item) => item.completion === true)
        return result;
    }
    deleteTask = (itemid) => {
        const result = this.state.tasks.filter((item) => item.id !== itemid)
        this.setState({ tasks: result })
    }

    changeCompletionStatus = (itemid) => {
        const temp = [...this.state.tasks]  // taking and spreading the props from DB
        const obj = temp.find((item) => item.id === itemid) //finding the object from id
        obj.completion = !obj.completion  // toggling the object state opposite
        this.setState({ tasks: temp })  //setting the new state 
    }
    changeDeletionStatus = (itemid) => {
        const temp = [...this.state.tasks]
        const obj = temp.find((item) => item.id === itemid)
        obj.deletion = !obj.deletion
        this.setState({ tasks: temp })
    }

    render() {
        return (
            <div>
                <div className="Header">
                    <h3 align='center'>---------- To-Do List ---------</h3>
                    <p align='center'>--------- Never Forget your Important Tasks ---------</p>

                </div>
                <div class="container">
                    <div class="row-gap">
                        <div className="col-gap">
                            <PendingTask
                                pendingTask={this.getPendingItems()}
                                changeCompletion={this.changeCompletionStatus}
                            />
                        </div>
                        <div className="col-gap">
                            <CompleteTask
                                completedTask={this.getCompletedItems()}
                                changeCompletion={this.changeCompletionStatus}
                                changeDeletion={this.changeDeletionStatus}
                            />
                        </div>
                        <div className="col-gap">
                            <Trash
                                deletedTask={this.deleteTask}
                                changeDeletion={this.changeDeletionStatus}
                            />
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <hr></hr>
                    <p> made with ❤️ by <a href="https://github.com/Atharva-Sabde">Atharva Sabde </a> </p>
                </div>

            </div >
        )
    }

}


export default TodoList;