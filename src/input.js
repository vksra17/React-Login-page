import React  from "react";
import Get from "./get.js";
class Input extends React.Component {
    state = {
      name: ""
    };
  
    handleInput = event => {
      this.setState({ name: event.target.value });
    };
  
    logValue = () => {
      console.log(this.state.name);
    };
  
    render() {
      return (
        <div>
          <input onChange={this.handleInput} placeholder="Enter name" />
          <button onClick={this.logValue}>Log value</button>
        <Get shareInput = {this.handleInput}/>
        </div>
      );
    }
  }
 export default Input;