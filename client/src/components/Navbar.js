import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../App';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext)

    const RenderMenu = () => {


        if (state) {
            return (
                <>

                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/"><strong>Home</strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about"><strong>AboutMe</strong></NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout"><strong>Logout</strong></NavLink>
                    </li>

                </>
            )

        } else {
            return (<>

                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/"><strong>Home</strong></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about"><strong>AboutMe</strong></NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/signin"><strong>LogIn</strong></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup"><strong>Register</strong></NavLink>
                </li>


            </>)
        }


    }



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{ color: "Brown" }}><strong>YOURBIO</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">



                            <RenderMenu />


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar