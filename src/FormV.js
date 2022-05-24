import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import axios from "axios"


// import CustomerForm  from './form';
// const validate =(values)=>{
//     var errors = {};
//     if(!values.name){
//         errors.name="Name is not emptied";
//     }else if(values.name.length>15){
//         errors.name = "Max 15 character allowed"
//     }else if(values.name.length<3){
//         errors.name = "Min 3 character required"
//     }
//     return errors;
// }

const Form = () => {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            number: ""
        },
        // validate,
        validationSchema: yup.object({
            name: yup.string()
                .strict()
                .trim()
                .required("Not be emptied")
                .max(15, "Max 15 characters allowed")
                .min(3, "Min 3 required"),
            number: yup.number(10, "10 digit number allowed only")
                .required("+91 - Must be Indian number")
            ,
            email: yup.string()
                .required("Not be emptied")
                .email(),
            password: yup.string()
                .required("Not be emptied")
                .min(8, "Min 8 charcters required"),
            confirmPassword: yup.string()
                .required("not be emptied")
                .oneOf([yup.ref("password"), null], "Password must be same")
        }),
        
        onSubmit: (userInputData) => {
            // let url= http://127.0.0.1:27017/nodebatch;
            // axios.post(url, userInputData)
            // .then(res => console.log('Data send'))
            // .catch(err => console.log(err.data))
            console.log(userInputData);
        }
    });
    
    return (<>
        <div className="container mt-5">
            <div className="jumbotron">
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name} />
                        <br />
                        {formik.errors.name ?
                            <div className="text-danger">{formik.errors.name}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            className="form-control"
                            type="text"
                            name="number"
                            onChange={formik.handleChange}
                            value={formik.values.number} />
                        <br />
                        {formik.errors.number ?
                            <div className="text-danger">{formik.errors.number}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        <br />
                        {formik.errors.email ?
                            <div className="text-danger">{formik.errors.email}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            type="text"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password} />
                        <br />
                        {formik.errors.password ?
                            <div className="text-danger">{formik.errors.password}</div> : null}
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            className="form-control"
                            type="text"
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword} />
                        <br />
                        {formik.errors.confirmPassword ?
                            <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <button className="btn btn-primary" >Sign-Up</button>
                </form>
            </div>
        </div>
    </>);
}
export default Form;