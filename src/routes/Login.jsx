import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className='form'>
            <h2>Enter Details</h2>
            <form>
                <label>Email : <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' required /></label>
                <label>Password : <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' required /></label>
                <button onClick={handleSubmit}>Login</button>
                <Link to='/signup'>Signup</Link>
            </form>
        </div>
    )
}

export default Login