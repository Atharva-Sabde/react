import React from "react";

class ClassCompPropDemo extends React.Component{
    constructor(props){
        super(props);  // sending it to parent class
    }
    

    render(){
        const details = this.props;
        console.log(details);
        return(
            <>
                <h1> Sending Props from index </h1>
                <h2> My namee : {details.name} </h2>
                <h2> My Id : {details.id} </h2>
                <h3> is eligible: {details.eligible}</h3>
            </>
        )
    }

}

export default ClassCompPropDemo;