import React  from "react";

class ContactManagerComp extends React.Component{
    constructor(props){
        super(props)
        this.state{
            contactinfo:[]
        }
    }

    static getDerivedStateFromProps(props,state){
        return{contactinfo:props.data}
    }


    handleUsername=(e)=>{
        this.setState({ipUser:e.target.value})
    }
    handlePhone=(e)=>{
        this.setState({ipPhone:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({ipUser:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({ipUser:e.target.value})
    }

    // instead of making all different functions we can do it with one function using keys
    render(){
        return(
            <div>
                <form>
                    UserName: <input type='text' onChange={
                    (e)=>this.handleChange(e)
                    }></input>
                    Phone: <input type='text' onChange={
                    (e)=>this.handleChange(e)
                    }></input>
                    Email: <input type='text' onChange={
                    (e)=>this.handleChange(e)
                    }></input>
                    Address: <input type='text' onChange={
                    (e)=>this.handleChange(e)
                    }></input>
                </form>
            </div>
            
        )
    }
}