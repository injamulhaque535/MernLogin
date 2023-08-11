import React, { useState } from 'react'
import loginimg from "../img/loginimg.png";
import { Link , useNavigate} from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate ();
    // get user email and pass from the frontend
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const loginUser = async (e)=>{
       e.preventDefault();
       
       const res = await fetch('/signin',{
           method: "POST",
           headers:{
               "Content-Type" : "application/json"
           },
           body:JSON.stringify({
               email:email,
               password:password
           })
       });

       const data = res.json();
       if(res.status===400 || !data){
           window.alert("Invalid Details");
       }else{
           window.alert("Login Successful");
           navigate("/");
       }
    }
    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="login-content">
                    <div className="login-image">
                            <figure>
                                <img src={loginimg} alt="login Pic" />
                            </figure>
                            <Link to="/signup" className="login-image-link">Create New Account</Link>
                        </div>
                        <div className="login-form">
                            <h2 className="form-title">Login</h2>
                            <form method="POST" id="register-form" className="register-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" autoComplete='off' 
                                    value={email} 
                                    onChange ={(e)=> setEmail(e.target.value)} 
                                    placeholder='Your Email' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="text" name="password" autoComplete='off'
                                    value={password} 
                                    onChange ={(e)=> setPassword(e.target.value)}
                                    placeholder='Your Password' />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="login" id="login" value="Login" className="form-submit"
                                    onClick={loginUser}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login