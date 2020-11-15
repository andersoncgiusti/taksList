import { Component, Fragment } from "react";

export default class ToDoList extends Component {
    //Here is my constructor containing the list
    constructor() {
        super();
        this.state = { 
            task : "",
            to_do_list : [ "Finish this test", "Get hired", "Change the world" ]
        };
        //Here I am saying that the object addsTask will be equal to itself even returning the value that you type
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


      render () {
        return (
            //I used fragment is a method they created to replace the div, that is, it has the same function of separating
            <div style={{
                boxShadow: "10px 10px 5px rgb(200, 200, 200)",
                maxWidth: "700px",
                borderRadius: "5px",
                width: "95%",
                padding: "60px 2%",
                background: "#000000",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
            }}>
                <h1 style={{
                    color: "#ec6b43",
                    textTransform: "uppercase"
                }}>Add a new task to your to-do list</h1>
                <input style={{
                    background: "ffffff",
                    color: "black",
                    width: "90%",
                    height: "50px",                    
                    borderRadius: "5px",
                    textTransform: "uppercase", 
                    border: "0",
                    margin: "5px"          
                }} onChange={ this.handleChange } value={ this.state.task }/>
                <button style={{
                    background: "#ec6b43",
                    color: "black",
                    width: "90.5%",
                    height: "50px",                    
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "2",
                    fontSize: "22px", 
                }}onClick={ this.addTask}>Add</button>                
                <ul style={{
                    listStyleType: "none", 
                    margin: "center",
                    maxWidth: "100%",
                    width: "90%",
                    justifyContent: "space-between"           
                }}>
                    { this.state.to_do_list.map( task => 
                    <li style={{
                        color: "white",
                        textTransform: "uppercase",
                        marginTop: "7px",
                        paddingBottom: "3px",
                        borderBottom: "1px solid #ffffff",       
                }}>{ task }</li>)}
                </ul>
            </div>
        );
    }

    //My object that will contact the "to_do_list" with the "task" that was added
    addTask() {
        this.setState({ 
            task : "",
            to_do_list : [].concat(this.state.to_do_list, this.state.task )});
    }
    //My object
    handleChange(event) {
        this.setState({ task : event.target.value });
    }

}

