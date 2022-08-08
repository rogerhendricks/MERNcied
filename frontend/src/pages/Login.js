import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const { login, error, isLoading} = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(email, password, role)
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email:</label>
            <input
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
            />
            <label for="role">Role:</label>
                <select name="role" id="role"
                onChange={(e)=> setRole(e.target.value)}
                value={role}
                >
                <option value="admin">admin</option>
                <option value="staff">Staff</option>
                <option selected value="client">Client</option>
            </select>
            <p>{role}</p>
            <br/>
            <button disabled= {isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login