import React from 'react';
import {Link} from "react-router-dom"
// import './App.css';

 class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
       
    this.state = {
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status,
        email:props.email
      }
    }
  }

  handleFirstNameChanged(event) {
    var Customer        = this.state.customer;
    Customer.firstName  = event.target.value;

    this.setState({ customer: Customer });
  }

  handleLastNameChanged(event) {
    var customer      = this.state.customer;
    customer.lastName = event.target.value;
    this.setState({ customer: customer });
  }

  handleStatusChanged(event) {
    var customer    = this.state.customer;
    customer.status = event.target.value;
    this.setState({ customer: customer });
  }
  handleEmail(event) {
    var customer    = this.state.customer;
    customer.email = event.target.value;
    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    var arr = [];
    arr.push(this.state.customer)
    console.log(arr)
  }

  render() {
    return (
      <div>Expences tracker
          <form>
        <label>
         Name: 
        </label>
        <input type="text" value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
        <br/>
        <label>
          Currency:
        </label>
        <select className='c1' value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
          <option value="INR">
            INR()
          </option>
          <option value="USD">
            USD
          </option>
          <option value="EUR">
            EUR
          </option>
        </select> 
        <br/>
        <label>
          Number:
        </label>
        <input type="text" value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
        <br/>
        <label>
            Gmail:
        </label>
        <input type='email' value={this.state.customer.email} onChange={this.handleEmail.bind(this)}/>
        <br/>
        <button onClick={this.handleButtonClicked.bind(this)}>
         LOGIN
          </button>
        <Link to="/vks">
        <button onClick={this.handleButtonClicked.bind(this)}>
           UPDATE
        </button>
        </Link>
        <button onClick={this.handleButtonClicked.bind(this)}>
         EDIT
        </button>
        </form>
      </div>
    );
  }
}
export default CustomerForm;