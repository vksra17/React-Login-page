import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {
                amount: props.amount,
                type: props.type,
                currency: props.currency,
                Notes: props.Notes
            }
        }
    }
    handleFirstNameChanged(event) {
        var Customer        = this.state.customer;
        Customer.amount  = event.target.value;
           this.setState({ customer: Customer });
      }
    render() {
        return (
            <body>
                <div >
                    <div >
                        <form >
                            <div>
                                <div>Name:<span></span></div>
                                <div>Total:<span></span></div>
                                <Link to="/vk"><FaAngleDoubleLeft /></Link>
                            </div>
                            <label>Amount<br />
                                <input type="number" value={this.state.customer.amount} onChange={this.handleLastNameChanged.bind(this)} />
                            </label>
                            <label>Type
                                <select>
                                    <option value="credit">Credit</option>
                                    <option value="cr">Debit</option>
                                </select>
                            </label>
                            <label> Currency
                                <select >
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
                            </label>
                            <label>Notes
                                <input type="number" />
                            </label>
                        </form>
                    </div>
                </div>
            </body>
        );
    }
}
export default Second;