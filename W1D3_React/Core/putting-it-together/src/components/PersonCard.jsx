import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
        
    }
    incrementAge = () => {
        // call the console log function inside the callback function of setState, 
        // to make sure that it gets called only after the state.age is set
        this.setState({age: this.state.age + 1}, () => console.log(this.state))
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.incrementAge}>
                    Birthday Button for {this.state.firstName}{" "}
                    {this.props.lastName}
                </button>
            </div>
        );
    }
}

export default PersonCard;
