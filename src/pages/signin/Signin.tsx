import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import MyLoader from '../../components/loader/Loader'
import { useLoader } from '../../context/LoaderContext'
import { useUser } from '../../context/UserContext'
import './signin.css'
const Signin = () => {

    const { login, setLogin } = useUser()
    const {loader, setLoader} = useLoader()

    const [user, setUser] = useState({
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

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(user);
        (async () => {
            setErrors({
                email: "", password: ""
            })
            setLoader(true)
            const response = await axios.post("https://QuizAppBackend.shubambhasin.repl.co/login", user)
            console.log(response)
            setLoader(false)
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify({
                    isUserLoggedIn: true,
                    username: response.data.user.name,
                    authToken: response.data.token
                }))
                setLogin(true)
                setUser({ email: "", password: "" })
            }

            if (response.data.error) {
                if (response.data.error.email) {
                    setErrors({ ...errors, email: response.data.error.email })
                }
                if (response.data.error.password) {
                    setErrors({ ...errors, password: response.data.error.password })
                }
            }
        })()
    }

    console.log(loader)
    return (
        <div className="signin">
            <form className="form" onSubmit={handleSubmit}>

                {login && <h1 className="h2 mtb1-rem f-red">Already logged in !!</h1>}

                <h2>Login</h2>
                <div className="input">
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={user.email}
                            onChange={handleChange} required/>
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
                            required/>
                        <div className="password-error">
                            <small><p className="f-red">{errors.password}</p></small></div>
                    </div>
                    <div className="input-box">
                        <button type="submit" value="Sign In " >
                            {!loader && "Signin"}
                            {loader && <MyLoader/>}
                            </button>
                    </div>
                    <span className=" flex jcc mtb1-rem">
                        <small className=" smaller f-white">Dont have an account ? <NavLink className="f-aqua" to='/signup'>Signup here</NavLink> </small>
                    </span>
                </div>
            </form>

        </div>
    )
}

export default Signin
