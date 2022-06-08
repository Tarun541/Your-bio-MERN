import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'


const Home = () => {

    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);


    const history = useNavigate()

    const homepage = async () => {
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
            setShow(true);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }


        } catch (error) {
            console.log(error);
            history('/');
        }
    }

    useEffect(() => {
        homepage();
    }, [])


    return (
        <>

            <div className='center-text'>
                <div>
                    <h4 className='text-center'>Welcome </h4><br />
                    <h1 className='text-uppercase text-center'>{userData.name}</h1>
                    <h2>{show ? 'Happy to see you Back' : 'Store your BIO here and SHOW CASE it'}</h2>
                </div>
            </div>

        </>
    )
}

export default Home