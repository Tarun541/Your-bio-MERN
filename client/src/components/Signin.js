import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css'
import login from '../images/login.png'
import TextField from '@mui/material/TextField';

import { UserContext } from '../App';

const Signin = () => {

    const { state, dispatch } = useContext(UserContext)

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await res.json();
        console.log(data)

        if (res.status === 400 || !data) {
            window.alert('Invalid Credentials');

        }
        else {

            dispatch({ type: 'USER', payload: true })
            window.alert("Login Successful");
            navigate('/')

        }

    }

    return (
        <>
            <div className="mask d-flex align-items-center mt-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card " style={{
                                borderRadius: "15px", boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)",
                                backgroundColor: "white"
                            }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-3"><img src={login} width="50%" alt="login" /></h2>

                                    <form method='POST' autoComplete='off'>



                                        <div className="form-outline mb-3">
                                            <TextField type="email" id="form3Example3cg" name='email'
                                                className="form-control form-control-md" placeholder='Email'
                                                value={email}
                                                variant='standard'
                                                onChange={(e) => setEmail(e.target.value)} />

                                        </div>


                                        <div className="form-outline mb-3">
                                            <TextField type="password" id="form3Example4cg" name='password'
                                                className="form-control form-control-md" placeholder='Password'
                                                value={password}
                                                variant='standard'
                                                onChange={(e) => setPassword(e.target.value)} />

                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <button type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                onClick={loginUser}>Log In</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Create An Account <NavLink to='/signup'
                                            className="fw-bold text-body"><u>Register Here</u></NavLink></p>

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

export default Signin;