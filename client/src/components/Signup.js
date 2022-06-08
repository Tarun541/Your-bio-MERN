import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../index.css'
// import TextField from '@material-ui/core/TextField'
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';


const Signup = () => {

    const history = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    })


    let name, value;


    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    }

    const postData = async (e) => {

        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })

        const data = await res.json();
        console.log(data)

        if (res.status === 422 || !data) {
            window.alert("Registration failed");

        }
        else {
            window.alert("Registration Successful");
            history('/signin');
        }

    }

    return (
        <>

            <div className="mask d-flex align-items-center">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{
                                borderRadius: "15px", boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)",
                                backgroundColor: "white"
                            }}>
                                <div className="card-body p-5">
                                    <h2 className=" text-center mb-3">Create An Account</h2>

                                    <form method='POST' autoComplete='off'>

                                        <div className="form-outline mb-4 mt-5 ">

                                            <TextField type="text" id="form3Example1cg"
                                                name='name'
                                                value={user.name}
                                                placeholder="Name"
                                                onChange={handleInputs}
                                                variant='standard'
                                                className="form-control form-control-md"

                                            />



                                        </div>


                                        <div className="form-outline mb-4">
                                            <TextField type="email" id="form3Example3cg" name='email'
                                                value={user.email}
                                                onChange={handleInputs}
                                                placeholder="Email"
                                                variant='standard'
                                                className="form-control form-control-md" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <TextField type="number" name='phone'
                                                value={user.phone}
                                                onChange={handleInputs}
                                                placeholder="Phone"
                                                variant='standard'
                                                className="form-control form-control-md" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <TextField type="text" name='work'
                                                value={user.work}
                                                onChange={handleInputs}
                                                placeholder="Profession"
                                                variant='standard'
                                                className="form-control form-control-md" />

                                        </div>

                                        <div className="form-outline mb-4">
                                            <TextField type="password" id="form3Example4cg" name='password'
                                                value={user.password}
                                                onChange={handleInputs}
                                                placeholder="Password"
                                                variant='standard'
                                                className="form-control form-control-md" />

                                        </div>

                                        <div className="form-outline mb-3">
                                            <TextField type="password" id="form3Example4cdg" name='cpassword'
                                                value={user.cpassword}
                                                onChange={handleInputs}
                                                placeholder="Confirm Password"
                                                variant='standard'
                                                className="form-control form-control-md" />

                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <button type="submit" onClick={postData}
                                                className="btn btn-success btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink to='/signin'
                                            className="fw-bold text-body"><u>Login here</u></NavLink></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup