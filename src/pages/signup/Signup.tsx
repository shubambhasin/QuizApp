import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import './signup.css'
const Signup = () => {

    const { login, setLogin} = useUser()
    console.log("Login",login)

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate()

    useEffect(() => {

        if (login) {
            navigate('/home')
        }

    }, [login])

    const handleChange = (e: any) => {
        e.preventDefault()
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors({ email: "", password: "" })
        console.log(user);
        (async () => {
            const response = await axios.post("https://QuizAppBackend.shubambhasin.repl.co/signup", user)
            console.log(response)
            if (response.data.error) {
                setErrors({ email: response.data.error.email, password: response.data.error.password })
            }
            if (response.status !== 200) {
                if (response.data.error.errors.password) {
                    setErrors({ ...errors, password: response.data.error.errors.password.message })
                }
                else {
                    setUser({ name: "", email: "", password: "" })
                }
            }
            if (response.data.token) {
                setLogin(true)
                localStorage.setItem("user", JSON.stringify({
                    isUserLoggedIn: true,
                    username: response.data.user.name,
                    authToken: response.data.token
                }))
            }
        })()
    }
    return (
        <div className="signup">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="input">
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={user.name}
                            onChange={handleChange} required />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={user.email}
                            onChange={handleChange} required />
                        <div className="email-error">
                            <small><p className="f-red"> {errors.email}</p></small>
                        </div>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            placeholder="Your Password" onChange={handleChange}
                            required />
                        <div className="password-error">
                            <small><p className="f-red"> {errors.password}</p></small>
                        </div>
                    </div>
                    <div className="input-box ">
                        <button type="submit" value="Sign In " >Signup</button>
                    </div>
                    <span className=" flex jcc mtb1-rem">
                        <small className=" smaller f-white">Already have an account ? <NavLink className="f-aqua" to='/login'>Login here</NavLink> </small>
                    </span>
                </div>
            </form>

        </div>
    )
}

export default Signup
