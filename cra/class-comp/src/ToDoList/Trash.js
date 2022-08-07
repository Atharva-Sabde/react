import React from "react"

class Trash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { deletedTask } = this.props
        return (
            <div className="trash-container container" >
                {console.log("bin render")}
                <h4>Trash </h4>
                {
                    deletedTask.map((item) => (
                        <div className="trash-card card">
                            <div className="card-style">
                                <h5>{item.taskname}</h5>
                                <p>{item.taskdesc}</p>
                                <button className='btn btn-primary' onClick={() => deletedTask(item.id)}>restore</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )

    }
}

export default Trash;