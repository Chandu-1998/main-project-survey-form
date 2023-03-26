// import './Login.css'
import { useState } from 'react';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser=e=>{
        e.preventDefault()
        console.log(email,password)
    }
    return (
        <div>
            <div >
                <form onSubmit={loginUser} >
                <div >
                    <br/>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br/>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br/>
                    <input id='btn' type='submit' value='Sign-In' />
                    <br />
                    </div>   
                </form>
            </div>
        </div>
    );
}
export default Login;