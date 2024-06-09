import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginCard.css';
const LoginCard = ({onLogin}) => {

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async()=>{

        try
        {   
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});

            if(response.status === 200)
                {
                    alert("Logged In Sucessfully");
                    navigate('/account/me');
                }
        }
        catch(err)
        {
            setError(err.response.data.message || 'An error occurred');
            navigate('/error', { state: { link: '/account/login', error: error } });

        }
      }
    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <div className="login__inputs">
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input login__input" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="login__button__container">
                        <button className="login__button" onClick= {handleSubmit}>LOGIN</button>
                    </div>
                </div>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have account? <Link to="/account/register">Create account</Link> </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginCard;