import { useState} from 'react';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const registerUser=e=>{
        e.preventDefault()
        console.log(name,email,phone,profession,password,confirmpassword)
    }
    return (
        <div >
            <div>
                <h1>Welcome Page<br /></h1>     
            </div>
            <div >
                <h1>Register</h1>
                <p>Register to continue access pages</p>
                <form onSubmit={registerUser}>
                <div className='inputs'>
                    <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type='number' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type='text' placeholder='Profession' value={profession} onChange={(e) => setProfession(e.target.value)} />
                    <br />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    <br />
                    </div>
                    <input type="submit" name ="submit"/>
                </form>
            </div>
        </div>
    );
}
export default Register;