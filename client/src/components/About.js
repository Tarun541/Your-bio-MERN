import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../images/profile.jpg'

const About = () => {

    const [userData, setUserData] = useState({});

    const history = useNavigate()

    const callAboutPage = async () => {
        try {

            const res = await fetch('/about', {
                method: "GET",
                headers: {

                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();

            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
            history('/signin');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="mask d-flex align-items-center">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px", backgroundColor: "white", boxShadow: "0 0px 20px 0 rgba(0,0,0,0.2)" }}>
                                <div className="card-body p-5">
                                    <h3 className='text-center'>About Me</h3>

                                    <div className="container mt-5" >
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={profile} alt="profile" style={{ width: 100 }} />
                                            </div>
                                            <div className="col-6">
                                                <h6 className='text-uppercase'>{userData.name}</h6>
                                                <p>Web Developer</p>

                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-4">
                                                <a href="https://www.youtube.com/">Youtube</a><br />
                                                <a href="https://www.youtube.com/">Instagram</a><br />
                                                <a href="https://www.youtube.com/">Twitter</a><br />
                                                <a href="https://www.youtube.com/">LinkedIn</a><br />
                                                <a href="https://www.youtube.com/">Profile</a>
                                            </div>


                                            <div className="col-8">
                                                <form method='GET'>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label ><strong>Name</strong></label>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className='text-uppercase'>{userData.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label ><strong>Email</strong></label>
                                                        </div>
                                                        <div className="col-6">
                                                            <p>{userData.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label ><strong>Phone</strong></label>
                                                        </div>
                                                        <div className="col-6">
                                                            <p>{userData.phone}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label ><strong>Profession</strong></label>
                                                        </div>
                                                        <div className="col-6">
                                                            <p>{userData.work}</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <label ><strong>Address</strong></label>
                                                        </div>
                                                        <div className="col-6">
                                                            <p>Hyderabad, Telangana, India</p>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About