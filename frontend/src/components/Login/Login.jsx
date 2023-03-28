import './Login.css'
import { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message,setMessage] = useState("")
    const [status,setStatus] = useState("")

    async function loginUser(event) {

        event.preventDefault();
        const formData = new FormData()
        formData.append("email",email)
        formData.append("password",password)
        const response = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            body:formData,
        
        })
        const data = await response.json()
        setToken(data.token);
        sessionStorage.setItem('token',token);
        setMessage(data.message)
        setStatus(data.status)
        console.log(email.split("@"))
        console.log(email.length)
        let flag = 0
        for(let i=0; i<email.length; i++)
        {
            if(email[i]=='@')
            {
                flag=0
               
                break;
            }
            else{
                flag = 1
            }
        }
        if(flag == 1){
            alert('enter valid email')

        }
else{
    alert('email exist')
}
    }

    useEffect(() => {
        sessionStorage.setItem("token" ,token)
    },[token])

   

    useEffect(() =>{
        if(token) {
            alert(message)
            navigate('/main')
            setMessage("")
            setStatus("")
            setEmail("")
            setPassword("")
            
        }else if( message != "") {
            alert(message)
            setMessage("")
            setStatus("")
            setEmail("")
            setPassword("")
        }
    },[message])
    return (
        <div className="logincontainer">
            <div className='loginregister'>
                <h1>Welcome Page<br />
                    <span className='second'>One line text</span><br />
                    <span className='third'> Will Be Here</span></h1>
                <p>Sign in to continue access pages</p>
                <p className='smallpara'>Don’t Have An Account?</p>
                <Link to={'/register'}><button>Register</button></Link>
            </div>
            <div className='login'>
                <div className='loginheader'>
                <h1>Sign In</h1>
                <p>Sign in to continue access pages</p>
                </div>
                <form onSubmit={loginUser}>
                <div className='logininputs'>
                    <br/>
                    <label id='firstlabel'>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br/>
                    <label id='secondlabel'>Password</label>
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