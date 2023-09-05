import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message,setMessage] = useState('')
    const signup = async(obj) =>{
        await axios.post(process.env.REACT_APP_API_URL+'signup',obj)
        // setMessage(tmp)
        console.log(tmp)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signup({name,email,password})
    }
    return <div className='form'>
        <h2>Register</h2>
        <form>
            <label>Name : <input value={name} onChange={(e) => setName(e.target.value)} type='text' required /></label>
            <label>Email : <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required /></label>
            <label>Password : <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' required /></label>
            <button onClick={handleSubmit}>Signup</button>
            <Link to='/login'>Login</Link>
            <p>{message && message}</p>
        </form>
    </div>
}

export default Signup